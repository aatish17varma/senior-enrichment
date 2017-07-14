function DeleteStudent(props){
    console.log("reached the Delete Student Component");
    return(
        <div>
            {props.listOfStudents.map(function(element){
                return(
                <div className = "container" key = {element.id}>  

                        <div className = "media-left">
                            <img src = {element.image} class = "media-object" style = {{width: '60px'}}/>     
                        </div>
                        <div className = "media-body">

                        <div className = "container">
                            
                            <div className = "row">

                                <div className = "col">
                            <h4 className="media-heading">{element.name}</h4>
                                <p>{element.email}</p>
                                </div>

                                <div className = "col">
                             <button type="button" onClick = {() => props.deleteStudent(element)}  className="btn btn-danger">Delete</button>
                                </div>
                            
                            </div>

                        </div>
                        
                      </div>  
                    </div>)
            })}
        </div>
    )
} 