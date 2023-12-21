const getAllUsers = (req,res) => {
    
const {limit,offset} = req.query
if(limit && offset){
    res.json({
        limit,
        offset
    })
} else {
    res.send("No hay ningun parametro")
}
}

export default {
    getAllUsers
}