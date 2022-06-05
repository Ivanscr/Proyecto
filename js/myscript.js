let madurez  = () => {
    var mt,fm,fa,fe,result;  
    mt = document.getElementById("mt").value;  
    fm = document.getElementById("fm").value;  
    fa = document.getElementById("fa").value;  
    fe = document.getElementById("fe").value;  
    calculo1=(fa+fe+fm);
    calculo2=mt-calculo1;
    result = calculo1;
    document.getElementById("resultado").innerHTML = "Resultado: "+ result;  
};

let halstead = () => {
    var  n1, n2, N1, N2, n, N, Nn, V, D, E, T, B;
    n1= document.getElementById("n1").value;  
    n2 = document.getElementById("n2").value;  
    N1 = document.getElementById("N1").value;  
    N2 = document.getElementById("N2").value;  
    n = Number(n1) + Number(n2);
    console.log('n:'+n)
    N = Number(N1) + Number(N2);
    console.log('N:'+N)
    Nn = (n1 * Math.log2(n1)) + (n2 * Math.log2(n2));
    console.log('Nn:'+Nn)
    V = Nn * Math.log2(n);
    console.log('V:'+V)
    D = (n1 / 2) * (N2 / n2)
    console.log('D:'+D)
    E = D * V;
    console.log('E:'+E)
    T = E / 18;
    B = V / 3000;
    document.getElementById("esfuerzo").innerHTML = "Esfuerzo: "+ E;  
};

let minimoC = () => {
    var n1, n2, N1, N2, mcm;
    let temporal;
    n1 = document.getElementById("n1c").value;  
    n2 = document.getElementById("n2c").value;  
    N1 = n1;
    N2 = n2;
    if((n1 !== "") && (n2!=="")){
        while (N2 !== 0) {
            temporal = N2;
            N2 = N1 % N2;
            N1 = temporal;
        }
        mcm = (n1 * n2) / N1;
        document.getElementById("mcm").innerHTML = "MCM: "+ mcm;  
    }
};


let conversorHtml = () => {
    var cadena, resultado;
    cadena = document.getElementById("cadena").value;
    resultado = String(cadena).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/á/g, '&aacute;').replace(/é/g, '&eacute;').replace(/í/g, '&iacute;').replace(/ó/g, '&oacute;').replace(/ú/g, '&uacute;').replace(/“/g,'&quot;').replace(/”/g,'&quot;');
    document.getElementById("conversion").innerText = "Conversion: "+ resultado;
}

let limpiar = () => {
    document.getElementById("mt").value = "";  
    document.getElementById("fm").value = "";  
    document.getElementById("fa").value = "";  
    document.getElementById("fe").value = "";  
    document.getElementById("n1").value = "";  
    document.getElementById("n2").value = "";  
    document.getElementById("N1").value = "";  
    document.getElementById("N2").value = "";  
    document.getElementById("n1c").value = "";  
    document.getElementById("n2c").value = "";  
    document.getElementById("cadena").value= "";
    document.getElementById("resultado").innerHTML = "Resultado: ";  
    document.getElementById("esfuerzo").innerHTML = "Esfuerzo: ";  
    document.getElementById("mcm").innerHTML = "MCM: ";  
    document.getElementById("conversion").innerText = "Conversion: ";
}