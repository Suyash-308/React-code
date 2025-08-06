function Sports(){
    const array=["Cricket","Football","Tennis","Hockey","kabaddi"]

    return(
        <div>
            <ol>
                {array.map((sportName)=>
                <li key={sportName}>{sportName}</li>  )}
            </ol>
        </div>
    );
}

export default Sports;