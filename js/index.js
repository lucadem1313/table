
$(document).ready(function(){
  
  
  $(".style").click(function(e){
    e.preventDefault();
    
    window.location.hash = $(this).attr('href');
    window.location.reload();
  });
  // One query, example code:
function WD(item, number) {
  if(number == 80) item = "mercury (element)";
    var result;
    url = "http://en.wikipedia.org/w/api.php?action=query&prop=description&titles=" + item.toString() + "&prop=extracts&exintro&explaintext&format=json&redirects=1&callback=?";
    $.getJSON(url, function (json) {
        var item_id = Object.keys(json.query.pages)[0]; // THIS DO THE TRICK !
        sent = json.query.pages[item_id].extract;
        result = "" + sent.substring(0,200)+"&nbsp;&nbsp;&nbsp;...<a href='http://wikipedia.org/wiki/"+item+"' target='_blank'>Wikipedia</a>";
  $("#table .element"+number+"").html(result);
    });
}
  
  if(window.location.hash != "")
  {
      var layout = window.location.hash;
      layout = parseInt(layout.replace("#", ""));
  }
  else
      var layout = 2;

if(layout == 1){
   /*$("body").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 30);
    
      event.preventDefault();

   });*/
}


  if(layout == 1)
  {
    var tableLayout = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0];
  }
  else
  {
    var tableLayout =  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,   2
                       ,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,   2
                       ,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,   2
                       ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,   2
                       ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,   2
                       ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,   2
                       ,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,   2, 2
                       ,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2
                       ,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  }
  
  
  
  
  
  
  
  
  
  var itemInfo = [];
  
  itemInfo[0] = {atNumber: 1, atSymbol: "H", name: "Hydrogen", mass: "1.008", desc: "Description", color: "red"};
  itemInfo[1] = {atNumber: 2, atSymbol: "He", name: "Helium", mass: "4.003", desc: "Description", color: "red"};
  itemInfo[2] = {atNumber: 3, atSymbol: "Li", name: "Lithium", mass: "6.941", desc: "Description", color: "yellow"};
  itemInfo[3] = {atNumber: 4, atSymbol: "Be", name: "Beryllium", mass: "9.012", desc: "Description", color: "yellow"};
  itemInfo[4] = {atNumber: 5 , atSymbol: "B", name: "Boron", mass: "10.811", desc: "Description", color: "yellow"};
  itemInfo[5] = {atNumber: 6 , atSymbol: "C", name: "Carbon", mass: "12.011", desc: "Description", color: "yellow"};
  itemInfo[6] = {atNumber: 7 , atSymbol: "N", name: "Nitrogen", mass: "14.007", desc: "Description", color: "red"};
  itemInfo[7] = {atNumber: 8 , atSymbol: "O", name: "Oxygen", mass: "15.999", desc: "Description", color: "red"};
  itemInfo[8] = {atNumber: 9 , atSymbol: "F", name: "Fluorine", mass: "18.998", desc: "Description", color: "red"};
  itemInfo[9] = {atNumber: 10, atSymbol: "Ne", name: "Neon", mass: "20.180", desc: "Description", color: "red"};
  itemInfo[10] = {atNumber: 11, atSymbol: "Na", name: "Sodium", mass: "22.990", desc: "Description", color: "yellow"};
  itemInfo[11] = {atNumber: 12, atSymbol: "Mg", name: "Magnesium", mass: "24.305", desc: "Description", color: "yellow"};
  itemInfo[12] = {atNumber: 13, atSymbol: "Al", name: "Aluminum", mass: "26.982", desc: "Description", color: "yellow"};
  itemInfo[13] = {atNumber: 14, atSymbol: "Si", name: "Silicon", mass: "28.086", desc: "Description", color: "yellow"};
  itemInfo[14] = {atNumber: 15, atSymbol: "P", name: "Phosphorus", mass: "30.974", desc: "Description", color: "yellow"};
  itemInfo[15] = {atNumber: 16, atSymbol: "S", name: "Sulfur", mass: "32.066", desc: "Description", color: "yellow"};
  itemInfo[16] = {atNumber: 17, atSymbol: "Cl", name: "Chlorine", mass: "35.453", desc: "Description", color: "red"};
  itemInfo[17] = {atNumber: 18, atSymbol: "Ar", name: "Argon", mass: "39.948", desc: "Description", color: "red"};
  itemInfo[18] = {atNumber: 19, atSymbol: "K", name: "Potassium", mass: "39.098", desc: "Description", color: "yellow"};
  itemInfo[19] = {atNumber: 20, atSymbol: "Ca", name: "Calcium", mass: "40.078", desc: "Description", color: "yellow"};
  itemInfo[20] = {atNumber: 21, atSymbol: "Sc", name: "Scandium", mass: "44.956", desc: "Description", color: "yellow"};
  itemInfo[21] = {atNumber: 22, atSymbol: "Ti", name: "Titanium", mass: "47.88", desc: "Description", color: "yellow"};
  itemInfo[22] = {atNumber: 23, atSymbol: "V", name: "Vanadium", mass: "50.942", desc: "Description", color: "yellow"};
  itemInfo[23] = {atNumber: 24, atSymbol: "Cr", name: "Chromium", mass: "51.996", desc: "Description", color: "yellow"};
  itemInfo[24] = {atNumber: 25, atSymbol: "Mn", name: "Manganese", mass: "54.938", desc: "Description", color: "yellow"};
  itemInfo[25] = {atNumber: 26, atSymbol: "Fe", name: "Iron", mass: "55.847", desc: "Description", color: "yellow"};
  itemInfo[26] = {atNumber: 27, atSymbol: "Co", name: "Cobalt", mass: "58.933", desc: "Description", color: "yellow"};
  itemInfo[27] = {atNumber: 28, atSymbol: "Ni", name: "Nickel", mass: "58.693", desc: "Description", color: "yellow"};
  itemInfo[28] = {atNumber: 29, atSymbol: "Cu", name: "Copper", mass: "63.546", desc: "Description", color: "yellow"};
  itemInfo[29] = {atNumber: 30, atSymbol: "Zn", name: "Zinc", mass: "65.39", desc: "Description", color: "yellow"};
  itemInfo[30] = {atNumber: 31, atSymbol: "Ga", name: "Gallium", mass: "69.723", desc: "Description", color: "yellow"};
  itemInfo[31] = {atNumber: 32, atSymbol: "Ge", name: "Germanium", mass: "72.61", desc: "Description", color: "yellow"};
  itemInfo[32] = {atNumber: 33, atSymbol: "As", name: "Arsenic", mass: "74.922", desc: "Description", color: "yellow"};
  itemInfo[33] = {atNumber: 34, atSymbol: "Se", name: "Selenium", mass: "78.96", desc: "Description", color: "yellow"};
  itemInfo[34] = {atNumber: 35, atSymbol: "Br", name: "Bromine", mass: "79.904", desc: "Description", color: "blue"};
  itemInfo[35] = {atNumber: 36, atSymbol: "Kr", name: "Krypton", mass: "83.80", desc: "Description", color: "red"};
  itemInfo[36] = {atNumber: 37, atSymbol: "Rb", name: "Rubidium", mass: "85.468", desc: "Description", color: "yellow"};
  itemInfo[37] = {atNumber: 38, atSymbol: "Sr", name: "Strontium", mass: "87.62", desc: "Description", color: "yellow"};
  itemInfo[38] = {atNumber: 39, atSymbol: "Y", name: "Yttrium", mass: "88.906", desc: "Description", color: "yellow"};
  itemInfo[39] = {atNumber: 40, atSymbol: "Zr", name: "Zirconium", mass: "91.224", desc: "Description", color: "yellow"};
  itemInfo[40] = {atNumber: 41, atSymbol: "Nb", name: "Niobium", mass: "92.906", desc: "Description", color: "yellow"};
  itemInfo[41] = {atNumber: 42, atSymbol: "Mo", name: "Molybdenum", mass: "95.94", desc: "Description", color: "yellow"};
  itemInfo[42] = {atNumber: 43, atSymbol: "Tc", name: "Technetium", mass: "97.907", desc: "Description", color: "yellow"};
  itemInfo[43] = {atNumber: 44, atSymbol: "Ru", name: "Ruthenium", mass: "101.07", desc: "Description", color: "yellow"};
  itemInfo[44] = {atNumber: 45, atSymbol: "Rh", name: "Rhodium", mass: "102.906", desc: "Description", color: "yellow"};
  itemInfo[45] = {atNumber: 46, atSymbol: "Pd", name: "Palladium", mass: "106.42", desc: "Description", color: "yellow"};
  itemInfo[46] = {atNumber: 47, atSymbol: "Ag", name: "Silver", mass: "107.868", desc: "Description", color: "yellow"};
  itemInfo[47] = {atNumber: 48, atSymbol: "Cd", name: "Cadmium", mass: "112.411", desc: "Description", color: "yellow"};
  itemInfo[48] = {atNumber: 49, atSymbol: "In", name: "Indium", mass: "114.82", desc: "Description", color: "yellow"};
  itemInfo[49] = {atNumber: 50, atSymbol: "Sn", name: "Tin", mass: "118.710", desc: "Description", color: "yellow"};
  itemInfo[50] = {atNumber: 51, atSymbol: "Sb", name: "Antimony", mass: "121.757", desc: "Description", color: "yellow"};
  itemInfo[51] = {atNumber: 52, atSymbol: "Te", name: "Tellurium", mass: "127.60", desc: "Description", color: "yellow"};
  itemInfo[52] = {atNumber: 53, atSymbol: "I", name: "Iodine", mass: "126.904", desc: "Description", color: "yellow"};
  itemInfo[53] = {atNumber: 54, atSymbol: "Xe", name: "Xenon", mass: "131.290", desc: "Description", color: "red"};
  itemInfo[54] = {atNumber: 55, atSymbol: "Cs", name: "Cesium", mass: "132.905", desc: "Description", color: "yellow"};
  itemInfo[55] = {atNumber: 56, atSymbol: "Ba", name: "Barium", mass: "137.327", desc: "Description", color: "yellow"};
  itemInfo[56] = {atNumber: 57, atSymbol: "La", name: "Lanthanum", mass: "138.906", desc: "Description", color: "yellow"};
  itemInfo[57] = {atNumber: 58, atSymbol: "Ce", name: "Cerium", mass: "140.115", desc: "Description", color: "yellow"};
  itemInfo[58] = {atNumber: 59, atSymbol: "Pr", name: "Praseodymium", mass: "140.908", desc: "Description", color: "yellow"};
  itemInfo[59] = {atNumber: 60, atSymbol: "Nd", name: "Neodymium", mass: "144.24", desc: "Description", color: "yellow"};
  itemInfo[60] = {atNumber: 61, atSymbol: "Pm", name: "Promethium", mass: "144.913", desc: "Description", color: "yellow"};
  itemInfo[61] = {atNumber: 62, atSymbol: "Sm", name: "Samarium", mass: "150.36", desc: "Description", color: "yellow"};
  itemInfo[62] = {atNumber: 63, atSymbol: "Eu", name: "Europium", mass: "151.965", desc: "Description", color: "yellow"};
  itemInfo[63] = {atNumber: 64, atSymbol: "Gd", name: "Gadolinium", mass: "157.25", desc: "Description", color: "yellow"};
  itemInfo[64] = {atNumber: 65, atSymbol: "Tb", name: "Terbium", mass: "158.925", desc: "Description", color: "yellow"};
  itemInfo[65] = {atNumber: 66, atSymbol: "Dy", name: "Dysprosium", mass: "162.50", desc: "Description", color: "yellow"};
  itemInfo[66] = {atNumber: 67, atSymbol: "Ho", name: "Holmium", mass: "164.930", desc: "Description", color: "yellow"};
  itemInfo[67] = {atNumber: 68, atSymbol: "Er", name: "Erbium", mass: "167.26", desc: "Description", color: "yellow"};
  itemInfo[68] = {atNumber: 69, atSymbol: "Tm", name: "Thulium", mass: "168.934", desc: "Description", color: "yellow"};
  itemInfo[69] = {atNumber: 70, atSymbol: "Yb", name: "Ytterbium", mass: "173.04", desc: "Description", color: "yellow"};
  itemInfo[70] = {atNumber: 71, atSymbol: "Lu", name: "Lutetium", mass: "174.967", desc: "Description", color: "yellow"};
  itemInfo[71] = {atNumber: 72, atSymbol: "Hf", name: "Hafnium", mass: "178.49", desc: "Description", color: "yellow"};
  itemInfo[72] = {atNumber: 73, atSymbol: "Ta", name: "Tantalum", mass: "180.948", desc: "Description", color: "yellow"};
  itemInfo[73] = {atNumber: 74, atSymbol: "W", name: "Tungsten", mass: "183.84", desc: "Description", color: "yellow"};
  itemInfo[74] = {atNumber: 75, atSymbol: "Re", name: "Rhenium", mass: "186.207", desc: "Description", color: "yellow"};
  itemInfo[75] = {atNumber: 76, atSymbol: "Os", name: "Osmium", mass: "190.2", desc: "Description", color: "yellow"};
  itemInfo[76] = {atNumber: 77, atSymbol: "Ir", name: "Iridium", mass: "192.22", desc: "Description", color: "yellow"};
  itemInfo[77] = {atNumber: 78, atSymbol: "Pt", name: "Platinum", mass: "195.08", desc: "Description", color: "yellow"};
  itemInfo[78] = {atNumber: 79, atSymbol: "Au", name: "Gold", mass: "196.967", desc: "Description", color: "yellow"};
  itemInfo[79] = {atNumber: 80, atSymbol: "Hg", name: "Mercury", mass: "200.59", desc: "Description", color: "blue"};
  itemInfo[80] = {atNumber: 81, atSymbol: "Tl", name: "Thallium", mass: "204.383", desc: "Description", color: "yellow"};
  itemInfo[81] = {atNumber: 82, atSymbol: "Pb", name: "Lead", mass: "207.2", desc: "Description", color: "yellow"};
  itemInfo[82] = {atNumber: 83, atSymbol: "Bi", name: "Bismuth", mass: "208.980", desc: "Description", color: "yellow"};
  itemInfo[83] = {atNumber: 84, atSymbol: "Po", name: "Polonium", mass: "208.982", desc: "Description", color: "yellow"};
  itemInfo[84] = {atNumber: 85, atSymbol: "At", name: "Astatine", mass: "209.978", desc: "Description", color: "yellow"};
  itemInfo[85] = {atNumber: 86, atSymbol: "Rn", name: "Radon", mass: "222.018", desc: "Description", color: "red"};
  itemInfo[86] = {atNumber: 87, atSymbol: "Fr", name: "Francium", mass: "223.020", desc: "Description", color: "yellow"};
  itemInfo[87] = {atNumber: 88, atSymbol: "Ra", name: "Radium", mass: "226.025", desc: "Description", color: "yellow"};
  itemInfo[88] = {atNumber: 89, atSymbol: "Ac", name: "Actinium", mass: "227.028", desc: "Description", color: "yellow"};
  itemInfo[89] = {atNumber: 90, atSymbol: "Th", name: "Thorium", mass: "232.038", desc: "Description", color: "yellow"};
  itemInfo[90] = {atNumber: 91, atSymbol: "Pa", name: "Protactinium", mass: "231.038", desc: "Description", color: "yellow"};
  itemInfo[91] = {atNumber: 92, atSymbol: "U", name: "Uranium", mass: "238.029", desc: "Description", color: "yellow"};
  itemInfo[92] = {atNumber: 93, atSymbol: "Np", name: "Neptunium", mass: "237.048", desc: "Description", color: "yellow"};
  itemInfo[93] = {atNumber: 94, atSymbol: "Pu", name: "Plutonium", mass: "244.064", desc: "Description", color: "yellow"};
  itemInfo[94] = {atNumber: 95, atSymbol: "Am", name: "Americium", mass: "243.061", desc: "Description", color: "yellow"};
  itemInfo[95] = {atNumber: 96, atSymbol: "Cm", name: "Curium", mass: "247.070", desc: "Description", color: "yellow"};
  itemInfo[96] = {atNumber: 97, atSymbol: "Bk", name: "Berkelium", mass: "247.070", desc: "Description", color: "yellow"};
  itemInfo[97] = {atNumber: 98, atSymbol: "Cf", name: "Californium", mass: "251.080", desc: "Description", color: "yellow"};
  itemInfo[98] = {atNumber: 99, atSymbol: "Es", name: "Einsteinium", mass: "252.083", desc: "Description", color: "yellow"};
  itemInfo[99] = {atNumber: 100, atSymbol: "Fm", name: "Fermium", mass: "257.095", desc: "Description", color: "yellow"};
  itemInfo[100] = {atNumber: 101, atSymbol: "Md", name: "Mendelevium", mass: "258.099", desc: "Description", color: "yellow"};
  itemInfo[101] = {atNumber: 102, atSymbol: "No", name: "Nobelium", mass: "259.101", desc: "Description", color: "yellow"};
  itemInfo[102] = {atNumber: 103, atSymbol: "Lr", name: "Lawrencium", mass: "262.11", desc: "Description", color: "yellow"};
  itemInfo[103] = {atNumber: 104, atSymbol: "Rf", name: "Rutherfordium", mass: "265.12", desc: "Description", color: "yellow"};
  itemInfo[104] = {atNumber: 105, atSymbol: "Db", name: "Dubnium", mass: "268.13", desc: "Description", color: "yellow"};
  itemInfo[105] = {atNumber: 106, atSymbol: "Sg", name: "Seaborgium", mass: "271.13", desc: "Description", color: "yellow"};
  itemInfo[106] = {atNumber: 107, atSymbol: "Bh", name: "Bohrium", mass: "270", desc: "Description", color: "yellow"};
  itemInfo[107] = {atNumber: 108, atSymbol: "Hs", name: "Hassium", mass: "277.15", desc: "Description", color: "yellow"};
  itemInfo[108] = {atNumber: 109, atSymbol: "Mt", name: "Meitnerium", mass: "276.15", desc: "Description", color: "yellow"};
  itemInfo[109] = {atNumber: 110, atSymbol: "Ds", name: "Darmstadtium", mass: "281.16", desc: "Description", color: "yellow"};
  itemInfo[110] = {atNumber: 111, atSymbol: "Rg", name: "Roentgenium", mass: "280.16", desc: "Description", color: "yellow"};
  itemInfo[111] = {atNumber: 112, atSymbol: "Cn", name: "Copernicium", mass: "285.17", desc: "Description", color: "yellow"};
  //itemInfo[112] = {atNumber: 113, atSymbol: "H", name: "Hydrogen", mass: "", desc: "Description", color: "yellow"};
  itemInfo[112] = {atNumber: 114, atSymbol: "Fl", name: "Flerovium", mass: "289.19", desc: "Description", color: "yellow"};
  //itemInfo[114] = {atNumber: 115, atSymbol: "H", name: "Hydrogen", mass: "", desc: "Description", color: "yellow"};
  itemInfo[113] = {atNumber: 116, atSymbol: "Lv", name: "Livermorium", mass: "293", desc: "Description", color: "yellow"};
 // itemInfo[116] = {atNumber: 117, atSymbol: "H", name: "Hydrogen", mass: "", desc: "Description", color: "yellow"};
 // itemInfo[117] = {atNumber: 118, atSymbol: "H", name: "Hydrogen", mass: "", desc: "Description", color: "yellow"};
  
  var counter = 0;
  var row = 1;
  var group = 1;
  if(layout==2) var topPart = true;
  else var topPart = false;
  for(var i = 0; i < tableLayout.length; i++)
    {
      var item = tableLayout[i];
      
      switch(item)
        {
          case 0:
            $("#table").append("<div class='item blank'>\
                <div class='flipper'>\
                  <div class='front red'>\
                    <h4 class='at-number'>1</h4>\
                    <h1>H</h1>\
                    <h4>Hydrogen</h4>\
                    <h4>1.008</h4>\
                  </div>\
                  <div class='back red'>\
                      Description \
                  </div>\
                </div>\
              </div>");
            group++;
            break;
          case 1:
            if(topPart){
              $("#table").append("<div class='item' data-row='"+row+"' data-group='"+group+"' title='Period "+row+", Group "+group+"'>\
                  <div class='flipper'>\
                    <div class='front "+itemInfo[counter].color+"'>\
                      <h4 class='at-number'>"+itemInfo[counter].atNumber+"</h4>\
                      <h4>"+itemInfo[counter].name+"</h4>\
                      <h1>"+itemInfo[counter].atSymbol+"</h1>\
                      <h4>"+itemInfo[counter].mass+"</h4>\
                    </div>\
                    <div class='back element"+(counter+1)+" "+itemInfo[counter].color+"'></div>\
                  </div>\
                </div>");
            }
            else
            {
              $("#table").append("<div class='item'>\
                  <div class='flipper'>\
                    <div class='front "+itemInfo[counter].color+"'>\
                      <h4 class='at-number'>"+itemInfo[counter].atNumber+"</h4>\
                      <h4>"+itemInfo[counter].name+"</h4>\
                      <h1>"+itemInfo[counter].atSymbol+"</h1>\
                      <h4>"+itemInfo[counter].mass+"</h4>\
                    </div>\
                    <div class='back element"+(counter+1)+" "+itemInfo[counter].color+"'></div>\
                  </div>\
                </div>");
            }
            WD(itemInfo[counter].name, counter+1)
            group++;
            counter+=1;
            if(counter == 57 && topPart && layout == 2)
            {
              counter = 71;
            }
            if(counter == 89 && topPart && layout == 2)
            {
              counter = 103;
            }
            if(counter == 114 && layout == 2)
            {
              topPart = false;
              counter = 57;
            }
            if(counter == 71 && !topPart && layout == 2)
            {
              counter = 89;
            }
            break;
          case 2:
            $("#table").append("<br>");
            row++;
            group = 1;
            break;
        }
    }
  
  
  if(layout==1)
  {
    $("#table").css("width", 32 * 64.1 + "px");
    $("body").css("width", (32 * 64.1 + 200)+ "px");
  }
  else
  {
    $("#table").css("width", 18 * 64.1 + "px");
    $("body").css("width", (18 * 64.1 + 200)+ "px");
  }
  
  $(".item").click(function(){
    $(".item.active").removeClass("active");
    $(this).addClass("active");
  });
  $(".blank").click(function(){
    $(".item.active").removeClass("active");
  });
  $("#background").click(function(){
    $(".item.active").removeClass("active");
  });
  $(document).bind("click", function(e){
    if($(e.target).closest('#table').length === 0) {
      $(".item.active").removeClass("active");
    }
  });
  
  $("button").click(function(){
    var words = [];
    var searchTerm = $("input[type='text']").val();
    
    for(var i = 0; i < searchTerm.length; i++)
    {
        var trip = false;
      for(var j = 0; j < itemInfo.length; j++)
      {
        if(i < searchTerm.length-1)
        {
          if((searchTerm[i].toLowerCase() + searchTerm[i+1].toLowerCase()) == itemInfo[j].atSymbol.toLowerCase())
          {
          console.log("asdf-" + searchTerm[i]);
            words.push(j);
            i++;
            trip = true;
          }
          else if(searchTerm[i].toLowerCase() == itemInfo[j].atSymbol.toLowerCase() && !trip)
          {
            words.push(j);
          }
        }
        else
        {
          if(searchTerm[i].toLowerCase() == itemInfo[j].atSymbol.toLowerCase())
          {
            words.push(j);
           // searchTerm = searchTerm.slice(0,i) + searchTerm.slice(i+1);
          }
        }
      }
    }
    $("#results").html("");
    for(var i = 0; i < words.length; i++)
    {
      $("#results").append("<div class='item'>\
                <div class='flipper'>\
                  <div class='front "+itemInfo[words[i]].color+"'>\
                    <h4 class='at-number'>"+itemInfo[words[i]].atNumber+"</h4>\
                    <h4>"+itemInfo[words[i]].name+"</h4>\
                    <h1>"+itemInfo[words[i]].atSymbol+"</h1>\
                    <h4>"+itemInfo[words[i]].mass+"</h4>\
                  </div>\
                  <div class='back element"+(words[i]+1)+" "+itemInfo[words[i]].color+"'></div>\
                </div>\
              </div>");
    }
  });
  function calculateSolution(){
    var combineElementValence;
    $("#combine .item").each(function(){
      combineElementValence = parseInt($(this).data('group'));
    });
    var combineWithElementValence;
    $("#combinewith .item").each(function(){
      combineWithElementValence = parseInt($(this).data('group'));
      console.log(combineWithElementValence);
    });
    
    var charge1, charge2;
    
    switch(combineElementValence)
      {
        case 1:
          charge1 = -1;
          break;
        case 2:
          charge1 = -2;
          break;
        case 13:
          charge1 = -3;
          break;
        case 14:
          charge1 = -4;
          break;
        case 15:
          charge1 = 3;
          break;
        case 16:
          charge1 = 2;
          break;
        case 17:
          charge1 = 1;
          break;
        case 18:
          charge1 = 0;
          break;
      }
    
    
    switch(combineWithElementValence)
      {
        case 1:
          charge2 = -1;
          break;
        case 2:
          charge2 = -2;
          break;
        case 13:
          charge2 = -3;
          break;
        case 14:
          charge2 = -4;
          break;
        case 15:
          charge2 = 3;
          break;
        case 16:
          charge2 = 2;
          break;
        case 17:
          charge2 = 1;
          break;
        case 18:
          charge2 = 0;
          break;
      }
    var counter1 = 0;
    var counter2 = 0;
    
    var combined = false;
    for(var i = 1; i < 100; i++)
      {
        for(var j = 1; j < 100; j++)
          {
            
            if(charge1 * i + charge2 * j == 0 && !combined)
              {
                for(var q = 0; q < i; q++)
                  {
                    $("#combine .item").clone().appendTo("#solution");
                    
                  }
                for(var w = 0; w < j; w++)
                  {
                    $("#combinewith .item").clone().appendTo("#solution");
                    
                  }
             if(combineWithElementValence > combineElementValence){
                if(i == 1 && j == 1)
                  $("#solution #combo").html($("#combine .item h1").text() + $("#combinewith .item h1").text());
                if(i == 1 && j != 1)
                  $("#solution #combo").html($("#combine .item h1").text() + $("#combinewith .item h1").text() + "<sub>"+j+"</sub>");
                else if(j == 1 && i != 1)
                  $("#solution #combo").html($("#combine .item h1").text() + "<sub>"+i+"</sub>"+$("#combinewith .item h1").text());
                else if(i != 1 && j != 1)
                  $("#solution #combo").html($("#combine .item h1").text() + "<sub>"+i+"</sub>"+$("#combinewith .item h1").text() + "<sub>"+j+"</sub>");
                }
             else {
                if(i == 1 && j == 1)
                  $("#solution #combo").html($("#combinewith .item h1").text() + $("#combine .item h1").text());
                if(i == 1 && j != 1)
                  $("#solution #combo").html($("#combinewith .item h1").text() + "<sub>"+j+"</sub>" + $("#combine .item h1").text());
                else if(j == 1 && i != 1)
                  $("#solution #combo").html($("#combinewith .item h1").text()+$("#combine .item h1").text() + "<sub>"+i+"</sub>");
                else if(i != 1 && j != 1)
                  $("#solution #combo").html($("#combinewith .item h1").text() + "<sub>"+j+"</sub>"+$("#combine .item h1").text() + "<sub>"+i+"</sub>");
                }

                combined = true;
                break;
              }
          }
      }
  }
  
if(layout == 2){
  $("#combine").droppable({
    
    drop: function (e, ui) {
        $(this).empty();
        $("#solution .item").remove();
        $("#solution #combo").html('');
        $(ui.draggable).clone().appendTo($(this));
        calculateSolution();
    }
  });
  $("#combinewith").droppable({
    
    drop: function (e, ui) {
        $(this).empty();
        $("#solution .item").remove();
        $("#solution #combo").html('');
        $(ui.draggable).clone().appendTo($(this)).addClass('combinewithelement');
        calculateSolution();
    }
  });
  $('.item:not(".blank"):not(".active")').each(function(){
    $(this).draggable({
      cursor: "move",
      helper: 'clone',
      stop:   function handleDragStop(event, ui){
    var posX = parseInt(ui.helper.left);
    var posY = parseInt(ui.helper.top);
    
   // if(posX > 20 && posX < 200)
    //  {
            $("#bonding").append(ui.draggable);
      //}
  },
      opacity: 0.6
      //drag: $(this).removeClass("not-dragged")
    });
  });
}
else
{
$("#bonding").remove();
}
});