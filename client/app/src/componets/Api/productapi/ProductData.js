

// api for fetching all data
export const FetchAllData=async()=>{

    const responce=await fetch('http://localhost:9009/app/getallproducts',{
        method:'get'
    })

    if(!responce.ok){
        throw new Error ("error is ocuured in fetching data")
    }

    const resultApi=await responce.json();
    return resultApi.result;
}


