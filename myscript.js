let madurez  = () => {
    var mt,fm,fa,fe, result;  
    mt = document.getElementById("mt").value;  
    fm = document.getElementById("fm").value;  
    fa = document.getElementById("fa").value;  
    fe = document.getElementById("fe").value;  
    result = ((fa + fm + fe) - mt) / mt;
    document.getElementById("resultado").innerHTML = "Resultado: "+ result;  
};
