// Minimal JS: copy email to clipboard and set current year
document.addEventListener('DOMContentLoaded', function(){
  var copyBtn = document.getElementById('emailCopy');
  if(copyBtn){
    copyBtn.addEventListener('click', function(){
      var email = 'scott@scottdowl.ing';
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(email).then(function(){
          copyBtn.textContent = 'Copied ✓';
          setTimeout(function(){ copyBtn.textContent = 'Copy email'; }, 2000);
        });
      } else {
        // fallback
        var ta = document.createElement('textarea'); ta.value = email; document.body.appendChild(ta); ta.select();
        try{ document.execCommand('copy'); copyBtn.textContent = 'Copied ✓'; }catch(e){};
        ta.remove(); setTimeout(function(){ copyBtn.textContent = 'Copy email'; }, 2000);
      }
    });
  }

  var y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
});
