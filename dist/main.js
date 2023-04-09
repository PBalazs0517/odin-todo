(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{p:()=>r});const t=(e,t=[])=>{const n=e.replace(/\s/g,""),o=t;return{getName:()=>e,getId:()=>n,getToDos:()=>o,addToDos:e=>o.push()}};function n(){if(r.getStorage().map((e=>e.getId())).some((e=>e==document.getElementById("projectInput").value.replace(/\s/g,""))))alert("The names have to be unique (spaces are ignored)"),document.getElementById("projectInput").innerHTML="";else if(""==document.getElementById("projectInput").value.replace(/\s/g,""))alert("You must add a name to your project"),document.getElementById("projectInput").innerHTML="";else{const e=t(document.getElementById("projectInput").value);localStorage.setItem(`project${localStorage.length}`,JSON.stringify({name:e.getName(),id:e.getId(),todos:e.getToDos()})),r.pushStorage(e);const n=document.getElementById("projectList"),o=document.createElement("li");o.id=e.getId(),o.innerHTML=e.getName(),n.appendChild(o),d()}}function o(){d()}function d(){let e=document.getElementById("mainCont");for(;e.firstChild;)e.removeChild(e.lastChild)}function c(e){const t=document.getElementById("projectList"),n=document.createElement("li");n.id=e.getId(),n.innerHTML=e.getName(),t.appendChild(n)}const r=(()=>{const e=[];return{getStorage:()=>e,pushStorage:t=>e.push(t)}})();!function(){for(let e=0;e<localStorage.length;e++){const n=JSON.parse(localStorage.getItem(`project${e}`)),o=t(n.name,n.todos);r.pushStorage(o),c(o)}}(),document.getElementById("addProject").addEventListener("click",(()=>{!function(){let e=document.getElementById("mainCont");for(;e.firstChild;)e.removeChild(e.lastChild);let t=document.createElement("div");t.id="projectAddCont",e.appendChild(t);let d=document.createElement("input");d.id="projectInput",d.placeholder="Project's name",t.appendChild(d);let c=document.createElement("button");c.id="addBtn",c.innerHTML="Add",t.appendChild(c);let r=document.createElement("button");r.id="cancelBtn",r.innerHTML="Cancel",t.appendChild(r),c.addEventListener("click",n),r.addEventListener("click",o),d.focus()}()})),function(){let e=Array.from(document.getElementById("projectList").children);e.shift(),e.forEach((e=>{e.addEventListener("click",(()=>{}))}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBU2UsY0FBYyxTQUMxQ2lCLEVBQWEvQyxHQUFLLGVBQ2xCK0MsRUFBYUMsWUFBYyxpQkFDM0JGLEVBQUlmLFlBQVlnQixHQUNoQixJQUFJRSxFQUFTbEMsU0FBU2UsY0FBYyxVQUNwQ21CLEVBQU9qRCxHQUFLLFNBQ1ppRCxFQUFPL0IsVUFBWSxNQUNuQjRCLEVBQUlmLFlBQVlrQixHQUNoQixJQUFJQyxFQUFZbkMsU0FBU2UsY0FBYyxVQUN2Q29CLEVBQVVsRCxHQUFLLFlBQ2ZrRCxFQUFVaEMsVUFBWSxTQUN0QjRCLEVBQUlmLFlBQVltQixHQUdoQkQsRUFBT0osaUJBQWlCLFFBQVNwQyxHQUNqQ3lDLEVBQVVMLGlCQUFpQixRQUFTWixHQUVwQ2MsRUFBYUksT0FDakIsQ0VYSUMsRUFBWSxJQ2xCaEIsV0FDSSxJQUFJQyxFQUFXQyxNQUFNQyxLQUFLeEMsU0FBU0MsZUFBZSxlQUFld0MsVUFDakVILEVBQVNJLFFBQ1RKLEVBQVNLLFNBQVE3QyxJQUNiQSxFQUFFZ0MsaUJBQWlCLFNBQVMsUUFFM0IsR0FFVCxDRGFBYyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2xvYWRQcm9qZWN0c09uTG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Byb2plY3RTZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImNvbnN0IFByb2plY3QgPSAobmFtZSwgdG9Eb3NMaXN0ID0gW10pID0+IHtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgICBjb25zdCBpZCA9IG5hbWUucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xuICAgIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG4gICAgY29uc3QgdG9Eb3MgPSB0b0Rvc0xpc3Q7XG4gICAgY29uc3QgYWRkVG9Eb3MgPSAodG9kbykgPT4gdG9Eb3MucHVzaCgpO1xuICAgIGNvbnN0IGdldFRvRG9zID0gKCkgPT4gdG9Eb3M7XG4gICAgcmV0dXJuIHtnZXROYW1lLCBnZXRJZCwgZ2V0VG9Eb3MsIGFkZFRvRG9zfTtcbn0gXG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgLy8gY2xlYXJzIHRoZSBpbnRlcmZhY2UgXG4gICAgbGV0IG1haW5Db250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250Jyk7XG4gICAgd2hpbGUobWFpbkNvbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluQ29udC5yZW1vdmVDaGlsZChtYWluQ29udC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBjcmVhdGVzIHRoZSBpbnRlcmZhY2Ugd2hlcmUgdGhlIHVzZXIgbWFrZXMgbmV3IHRvZG9zIFxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaWQgPSAncHJvamVjdEFkZENvbnQnO1xuICAgIG1haW5Db250LmFwcGVuZENoaWxkKGRpdik7XG4gICAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdElucHV0LmlkID0gJ3Byb2plY3RJbnB1dCc7XG4gICAgcHJvamVjdElucHV0LnBsYWNlaG9sZGVyID0gJ1Byb2plY3RcXCdzIG5hbWUnO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uaWQgPSAnYWRkQnRuJztcbiAgICBhZGRCdG4uaW5uZXJIVE1MID0gJ0FkZCc7XG4gICAgZGl2LmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5pZCA9ICdjYW5jZWxCdG4nO1xuICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSAnQ2FuY2VsJztcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgIC8vYnV0dG9ucyBmdW5jdGlvbmFsaXRpZXNcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRCdG5Mb2dpYyk7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQnRuTG9naWMpO1xuICAgIC8vUW9MIHRoaW5nc1xuICAgIHByb2plY3RJbnB1dC5mb2N1cygpO1xufTtcblxuZnVuY3Rpb24gYWRkQnRuTG9naWMoKSB7XG4gICAgLy8gbWFrZXMgc3VyZSB0aGF0IHRoZXJlIGFyZSBubyBtYXRoY2luZyBvciBlbXB0eSBpZHNcbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3RzID0gUHJvamVjdHMuZ2V0U3RvcmFnZSgpO1xuICAgIGNvbnN0IHByb2plY3RJZHMgPSBleGlzdGluZ1Byb2plY3RzLm1hcChwID0+IHAuZ2V0SWQoKSk7XG4gICAgaWYocHJvamVjdElkcy5zb21lKGlkID0+IGlkID09IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElucHV0JykudmFsdWUpLnJlcGxhY2UoL1xccy9nLCBcIlwiKSkpIHtcbiAgICAgICAgYWxlcnQoJ1RoZSBuYW1lcyBoYXZlIHRvIGJlIHVuaXF1ZSAoc3BhY2VzIGFyZSBpZ25vcmVkKScpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElucHV0JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9IGVsc2UgaWYgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElucHV0JykudmFsdWUpLnJlcGxhY2UoL1xccy9nLCBcIlwiKSA9PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KCdZb3UgbXVzdCBhZGQgYSBuYW1lIHRvIHlvdXIgcHJvamVjdCcpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElucHV0JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGVzIGEgbmV3IFByb2plY3QgaW5zYXRuY2UgYmFzZWQgb24gaW5wdXRzXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SW5wdXQnKS52YWx1ZSk7XG4gICAgICAgIC8vIHN0b3JlcyB0aGUgaW5mb3JtYXRpb24gdGhhdCBhcmUgbmVlZGVkIHRvIHJlY3JlYXQgdGhlIGluc3RhbmNlIHdoZW4gdGhlIHBhZ2VzIGxvYWRlZCBpbiBhZ2FpblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdCR7bG9jYWxTdG9yYWdlLmxlbmd0aH1gLCBKU09OLnN0cmluZ2lmeSh7bmFtZTogbmV3UHJvamVjdC5nZXROYW1lKCksIGlkOiBuZXdQcm9qZWN0LmdldElkKCksIHRvZG9zOiBuZXdQcm9qZWN0LmdldFRvRG9zKCl9KSk7XG4gICAgICAgIC8vIHN0b3JlcyB0aGUgaW5zYW5jZSBzbyBpdCBpcyBhY2Nlc2FibGUgbGF0ZXIgb25cbiAgICAgICAgUHJvamVjdHMucHVzaFN0b3JhZ2UobmV3UHJvamVjdCk7XG4gICAgICAgIC8vIGNyZWF0ZXMgd2hhdCBpcyBnb25hIGJlIGRpc3BsYXllZFxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TGlzdCcpO1xuICAgICAgICBjb25zdCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld0xpLmlkID0gbmV3UHJvamVjdC5nZXRJZCgpO1xuICAgICAgICBuZXdMaS5pbm5lckhUTUwgPSBuZXdQcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobmV3TGkpO1xuICAgIFxuICAgICAgICBoaWRlVUkoKVxuICAgIH07IFxuXG59O1xuXG5mdW5jdGlvbiBjYW5jZWxCdG5Mb2dpYygpIHtcbiAgICBoaWRlVUkoKVxufVxuXG5mdW5jdGlvbiBoaWRlVUkoKSB7XG4gICAgbGV0IG1haW5Db250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250Jyk7XG4gICAgd2hpbGUobWFpbkNvbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluQ29udC5yZW1vdmVDaGlsZChtYWluQ29udC5sYXN0Q2hpbGQpO1xuICAgIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgLy8gZ2V0cyBhbGwgcHJvamVjdHMgYW5kIHJlY3JlYXRlcyB0aGUgUHJvamVjdCBpbnN0YW5jaWVzXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3Qke2l9YCkpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdCh2YWx1ZS5uYW1lLCB2YWx1ZS50b2Rvcyk7XG4gICAgICAgIFByb2plY3RzLnB1c2hTdG9yYWdlKHByb2plY3QpO1xuICAgICAgICBhZGRUb0RvbShwcm9qZWN0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRvRG9tKHApIHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TGlzdCcpO1xuICAgIGNvbnN0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBuZXdMaS5pZCA9IHAuZ2V0SWQoKTtcbiAgICBuZXdMaS5pbm5lckhUTUwgPSBwLmdldE5hbWUoKTtcbiAgICB1bC5hcHBlbmRDaGlsZChuZXdMaSk7ICAgXG59IiwiaW1wb3J0IGFkZFByb2plY3QgZnJvbSAnLi9hZGRQcm9qZWN0LmpzJztcbmltcG9ydCBsb2FkUHJvamVjdHNPbkxvYWQgZnJvbSAnLi9sb2FkUHJvamVjdHNPbkxvYWQuanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IGFkZFByb2plY3RJbnRlcmZhY2UgfSBmcm9tICcuL3Byb2plY3RTZWxlY3Rvci5qcyc7XG5leHBvcnQge1Byb2plY3RzfVxuXG5cbi8vIHRoaXMgaXMgd2hlcmUgdGhlIFByb2plY3QgaW5zdGFuY2VzIGFyZSBzdHJvcmVkXG5jb25zdCBQcm9qZWN0cyA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IFtdO1xuICAgIGNvbnN0IGdldFN0b3JhZ2UgPSAoKSA9PiBzdG9yYWdlO1xuICAgIGNvbnN0IHB1c2hTdG9yYWdlID0gKHApID0+IHN0b3JhZ2UucHVzaChwKVxuICAgIHJldHVybiB7Z2V0U3RvcmFnZSwgcHVzaFN0b3JhZ2V9XG59KSgpO1xuXG4vLyBsb2FkcyB0aGUgUHJvamVjdCBpbnN0YW5jZXMgc3RvcmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlXG5sb2FkUHJvamVjdHNPbkxvYWQoKTtcblxuLy8gcHJvamVjdCBhZGQgYnV0dG9uIFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0KCk7XG59KTtcblxuYWRkUHJvamVjdEludGVyZmFjZSgpXG4iLCJleHBvcnQgeyBhZGRQcm9qZWN0SW50ZXJmYWNlIH1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEludGVyZmFjZSgpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TGlzdCcpLmNoaWxkcmVuKTtcbiAgICBwcm9qZWN0cy5zaGlmdCgpO1xuICAgIHByb2plY3RzLmZvckVhY2gocCA9PiB7XG4gICAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5hbWUiLCJ0b0Rvc0xpc3QiLCJpZCIsInJlcGxhY2UiLCJ0b0RvcyIsImdldE5hbWUiLCJnZXRJZCIsImdldFRvRG9zIiwiYWRkVG9Eb3MiLCJ0b2RvIiwicHVzaCIsImFkZEJ0bkxvZ2ljIiwiUHJvamVjdHMiLCJnZXRTdG9yYWdlIiwibWFwIiwicCIsInNvbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWxlcnQiLCJpbm5lckhUTUwiLCJuZXdQcm9qZWN0IiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvZG9zIiwicHVzaFN0b3JhZ2UiLCJ1bCIsIm5ld0xpIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiaGlkZVVJIiwiY2FuY2VsQnRuTG9naWMiLCJtYWluQ29udCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImFkZFRvRG9tIiwic3RvcmFnZSIsImkiLCJwYXJzZSIsImdldEl0ZW0iLCJwcm9qZWN0IiwibG9hZFByb2plY3RzT25Mb2FkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpdiIsInByb2plY3RJbnB1dCIsInBsYWNlaG9sZGVyIiwiYWRkQnRuIiwiY2FuY2VsQnRuIiwiZm9jdXMiLCJhZGRQcm9qZWN0IiwicHJvamVjdHMiLCJBcnJheSIsImZyb20iLCJjaGlsZHJlbiIsInNoaWZ0IiwiZm9yRWFjaCIsImFkZFByb2plY3RJbnRlcmZhY2UiXSwic291cmNlUm9vdCI6IiJ9