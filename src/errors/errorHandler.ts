function getErrorProperties(error) {
  switch (error.name) {
    // DB errors have their own cases:

    case "SequelizeUniqueConstraintError": {
      const attributes = [];

      error.errors.forEach((obj) => attributes.push(obj.path));

      return {
        error: "Conflict",
        message: `Attributes: ${attributes.join(", ")} have to be unique.`,
        statusCode: 409
      };
    }

    case "SequelizeForeignKeyConstraintError": {
      return {
        error: "Bad Request",
        message: `${error.index} of given id does not exist.`,
        statusCode: 400
      };
    }

    default:
      return {
        name: error.name || "API error",
        message: error.message || "Server error",
        statusCode: error.status || 500
      };
  }
}

export default function (error, req, res, next) {
  if (!error.statusCode) {
    error = {
      ...error,
      ...getErrorProperties(error)
    };
  }

  return res.status(error.statusCode).json({ error: error.message });
}
