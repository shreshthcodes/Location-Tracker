const navigate={
    gps(success,fail){
        navigator.geolocation.getCurrentPosition(loc=>{
            const pos ={lat:loc.coords.latitude, lng:loc.coords.longitude}
            success(pos)},
            (err)=>fail(err))
    }
    }
export default navigate;