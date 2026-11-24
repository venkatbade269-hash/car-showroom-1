const filters=document.querySelectorAll('.filter'),cars=document.querySelectorAll('.car');filters.forEach(b=>b.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));b.classList.add('active');cars.forEach(c=>c.style.display=b.dataset.filter==='all'||c.dataset.type===b.dataset.filter?'':'none')}));
document.querySelectorAll('[data-model]').forEach(a=>a.addEventListener('click',()=>document.getElementById('model').value=a.dataset.model));
document.getElementById('date').min=new Date().toISOString().slice(0,10);
document.getElementById('drive-form').addEventListener('submit',e=>{e.preventDefault();if(!e.target.reportValidity())return;document.getElementById('success').style.display='block';e.target.querySelector('button').textContent='REQUEST PREPARED ✓'});
