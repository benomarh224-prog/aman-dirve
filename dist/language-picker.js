/* One non-modal, top-layer picker works in the header and inside modal forms. */
(() => {
  const globe='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-5 5-5 13 0 18 5-5 5-13 0-18Z"/></svg>';
  const check='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>';
  const picker=document.createElement('div');
  picker.id='language-picker';
  picker.className='language-picker';
  picker.setAttribute('popover','auto');
  picker.setAttribute('role','dialog');
  picker.setAttribute('aria-labelledby','language-picker-title');
  picker.setAttribute('data-no-translate','');
  picker.innerHTML=`<div class="picker-heading"><span class="picker-symbol">${globe}</span><div><h2 id="language-picker-title"></h2><p id="language-picker-description"></p></div></div><div class="picker-options"><button type="button" class="picker-option" data-language="ar" lang="ar"><span class="picker-monogram" aria-hidden="true">ع</span><span class="picker-option-copy"><b>العربية</b><small lang="en">Arabic</small></span><span class="picker-current"></span><span class="picker-check">${check}</span></button><button type="button" class="picker-option" data-language="en" lang="en"><span class="picker-monogram picker-monogram-en" aria-hidden="true">EN</span><span class="picker-option-copy"><b>English</b><small lang="ar">الإنجليزية</small></span><span class="picker-current"></span><span class="picker-check">${check}</span></button></div><p class="picker-note">${check}<span id="language-picker-note"></span></p>`;
  document.body.append(picker);
  let anchor=null;
  let fallbackOpen=false;
  const supportsPopover=typeof picker.showPopover==='function';
  if(!supportsPopover)picker.hidden=true;
  const isOpen=()=>supportsPopover?picker.matches(':popover-open'):fallbackOpen;
  function sync(){
    const arabic=document.documentElement.lang==='ar';
    picker.dir=arabic?'rtl':'ltr';
    picker.querySelector('#language-picker-title').textContent=arabic?'اختار لغتك':'Make yourself at home';
    picker.querySelector('#language-picker-description').textContent=arabic?'تصفّح بالطريقة اللي كتريحك':'Choose your preferred language';
    picker.querySelector('#language-picker-note').textContent=arabic?'اختيارك كيبقى محفوظ على هاد الجهاز':'Your choice is saved on this device';
    picker.querySelectorAll('[data-language]').forEach(button=>{
      const selected=button.dataset.language===document.documentElement.lang;
      button.setAttribute('aria-pressed',String(selected));
      button.querySelector('.picker-current').textContent=selected?(arabic?'الحالية':'Active'):'';
    });
    document.querySelectorAll('[data-language-toggle]').forEach(button=>{
      button.setAttribute('aria-controls','language-picker');
      button.setAttribute('aria-haspopup','dialog');
      if(supportsPopover)button.setAttribute('popovertarget','language-picker');
      button.setAttribute('aria-expanded',String(button===anchor&&isOpen()));
    });
    if(isOpen())position();
  }
  function position(){
    if(!anchor)return;
    const rect=anchor.getBoundingClientRect();
    const view=document.documentElement;
    const width=Math.min(326,view.clientWidth-24);
    picker.style.width=width+'px';
    picker.style.maxHeight=Math.max(180,view.clientHeight-24)+'px';
    const height=picker.getBoundingClientRect().height;
    const x=document.documentElement.dir==='rtl'?rect.right-width:rect.left;
    picker.style.left=Math.max(12,Math.min(x,view.clientWidth-width-12))+'px';
    const below=rect.bottom+10;
    const y=below+height<=view.clientHeight-12?below:rect.top-height-10;
    picker.style.top=Math.max(12,Math.min(y,view.clientHeight-height-12))+'px';
  }
  function close(restore=false){
    if(isOpen()){
      if(supportsPopover)picker.hidePopover();
      else {picker.hidden=true;fallbackOpen=false;}
    }
    document.querySelectorAll('[data-language-toggle]').forEach(button=>button.setAttribute('aria-expanded','false'));
    if(restore&&anchor?.isConnected)anchor.focus({preventScroll:true});
  }
  function open(button){
    if(anchor===button&&isOpen()){close(true);return;}
    close();
    anchor=button;
    // A picker inside a native modal must remain in that modal's active subtree.
    (button.closest('dialog')||document.body).append(picker);
    if(supportsPopover)picker.showPopover();
    else {fallbackOpen=true;picker.hidden=false;}
    sync();
    position();
    picker.querySelector(`[data-language="${document.documentElement.lang}"]`).focus({preventScroll:true});
  }
  document.addEventListener('click',e=>{
    const trigger=e.target.closest('[data-language-toggle]');
    if(trigger){e.preventDefault();open(trigger);return;}
    if(e.target.closest('#language-picker [data-language]')){sync();close(true);}
    else if(isOpen()&&!picker.contains(e.target))close();
  });
  picker.addEventListener('keydown',e=>{
    if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close(true);return;}
    const buttons=[...picker.querySelectorAll('[data-language]')];
    const current=buttons.indexOf(document.activeElement);
    if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){
      e.preventDefault();
      const next=e.key==='Home'?0:e.key==='End'?buttons.length-1:(current+(e.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length;
      buttons[next].focus();
    }
  });
  picker.addEventListener('toggle',e=>{if(e.newState==='closed')document.querySelectorAll('[data-language-toggle]').forEach(button=>button.setAttribute('aria-expanded','false'));});
  document.addEventListener('languagechange',sync);
  document.addEventListener('scroll',e=>{if(isOpen()&&!picker.contains(e.target))close();},true);
  window.addEventListener('resize',()=>{if(isOpen())close();});
  document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('close',()=>{if(dialog.contains(picker))close();}));
  sync();
})();
