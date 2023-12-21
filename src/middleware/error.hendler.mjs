function errorLogs(err, req, res, next) {
    console.log("errorLogs");
    console.error(err);
    next(err);
  }
  
  function handleError(err, req, res) {
    console.log("handleError");
    res.status(501).json({
      message: err.message,
      stack: err.stack,
    });
  }
  
  export default  {
    errorLogs,
    handleError,
  };