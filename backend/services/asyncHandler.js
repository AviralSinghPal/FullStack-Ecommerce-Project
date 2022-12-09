const asyncHandler = (fn) => async(req,res,next) => {
    try {
        await fn(req, res, next)
    } catch (err) {
        res.status(err.code || 500).json({
            success: false,
            messsage: err.messsage
        })
    }
}
// THIS COULD HAVE ALSO BEEN WRiTTEN LIKE THIS if you don't want to use arrow function
// function asyncHandler(fn) {
//     return async function (req, res, next) {
//       try {
//         await fn(req, res, next);
//       } catch (err) {
//         res.status(err.code || 500).json({
//           success: false,
//         });
//       }
//     };
//   }
export default asyncHandler 