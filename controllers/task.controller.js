let tasks = [];
let counter = 1;

exports.getTasks = (req, res) => {
    console.log("Hello");
    res.json(tasks);
};

exports.createTask = (req,res) => {
    console.log("Hello");
    let {title} = req.body;

    if(!title){
        return res.json({message:"Title is required"});
    }
    let task = {
        id: counter++,
        title,
        status: "pending"
    };

    tasks.push(task);
    console.log("Hello");
    
    res.json({
        message:"Task is created",
        task
    });
}

exports.deleteTask = (req,res)=>{
// const id = parseInt(req.params.id);
    const { id } = req.params;
    const numericId = parseInt(id);
    
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== numericId);

    if(tasks.length < initialLength){
        res.json({message:"Task is deleted"});
    }else{
        console.log(id);
        
        res.status(404).json({message:"Task not found" });
    }
};