let madurez  = () => {
    var mt,fm,fa,fe, result;  
    mt = document.getElementById("mt").value;  
    fm = document.getElementById("fm").value;  
    fa = document.getElementById("fa").value;  
    fe = document.getElementById("fe").value;  
    result = ((fa + fm + fe) - mt) / mt;
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