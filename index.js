function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(result => {
            console.log(result.data)
            result.data.forEach(element => {
                //Used to marks on the map
                latitude = element.latitude
                longitude = element.longitude

                cases=element.infected;
                if(cases>255)
                {
                    color="rgb(255,0,0)"

                }
                else{
                    color = `rgb(${cases}, 0, 0)`;
                }

                new mapboxgl.Marker({
                    draggable: false,
                    color: color

                })
                    .setLngLat([longitude, latitude])
                    .addTo(map)

                    
            });
           
            
        })
}
let interval=20000;
setInterval(updateMap,interval)


