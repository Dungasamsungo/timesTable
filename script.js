function generate(){
    var pnum = document.getElementById('txtnum')
    var res = document.getElementById('res')
    var tb = document.getElementById('tb')

    if(pnum.value.length == 0){
        window.alert (`Number is Required!`)
    }else{
        var n = Number(pnum.value)
        
        var c = 1
        tb.innerHTML =''
        for( c; c <= 12; c++){
            var item = document.createElement('option')
            item.text = `${n}  X  ${c}  =  ${n*c}`
            item.value = (c)
            tb.appendChild(item)
            
        }
    }
}