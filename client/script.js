async function Datafetch() {
    try {
        let datas = await fetch('http://localhost:3000/json');


        let parsed_datas= await datas.json();
        console.log("datas :",parsed_datas);

        let data = document.getElementById('container');


        let rows = '';
            for (let i = 0; i < parsed_datas.length; i++) {
                rows = rows + `
                <div class=" border border-4 p-2">
                <div class="text-center p-3"><img src ="${parsed_datas[i].image}"style="width:200px;height:200px;"></div>
                <div class="fw-bold pt-2">${parsed_datas[i].title.slice(0,25)+"..."}</div>
                <div class="pt-3">${parsed_datas[i].description.slice(0,100)+"...."}</div>
                <div>${parsed_datas[i].category}</div>
                </div>
                
                `;
            }
        
        data.innerHTML = rows;
        console.log("container:", data);
    
        
        

    }catch(error){
        console.log("error",error)

    }
}
Datafetch();
