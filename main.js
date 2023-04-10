(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}};e.d({},{p:()=>a});var t={};e.r(t);const n=(()=>{let e=0;return{getCount:()=>e,incrementCount:()=>e++}})(),o=(e,t=[])=>{const o=n.getCount();n.incrementCount();const d=t;return{getName:()=>e,getId:()=>o,getToDos:()=>d,addToDos:e=>d.push()}};function d(){if(a.getStorage().map((e=>e.getName())).some((e=>e==document.getElementById("projectInput").value)))alert("The names have to be unique"),document.getElementById("projectInput").innerHTML="";else if(""==document.getElementById("projectInput").value.replace(/\s/g,""))alert("You must add a name to your project"),document.getElementById("projectInput").innerHTML="";else{const e=o(document.getElementById("projectInput").value);localStorage.setItem(`project${localStorage.length}`,JSON.stringify({name:e.getName(),id:e.getId(),todos:e.getToDos()})),a.pushStorage(e);const n=document.getElementById("projectList"),d=document.createElement("li");d.id=e.getId(),d.innerHTML=e.getName(),n.appendChild(d),d.addEventListener("click",(()=>{console.log(e.getId()),t.activeProject=a.getStorage()[e.getId()]})),r()}}function c(){r()}function r(){let e=document.getElementById("mainCont");for(;e.firstChild;)e.removeChild(e.lastChild)}function l(e){const n=document.getElementById("projectList"),o=document.createElement("li");o.id=e.getId(),o.innerHTML=e.getName(),n.appendChild(o),o.addEventListener("click",(()=>{console.log(e.getId()),t.activeProject=a.getStorage()[e.getId()]}))}const a=(()=>{const e=[];return{getStorage:()=>e,pushStorage:t=>e.push(t)}})();!function(){for(let e=0;e<localStorage.length;e++){const t=JSON.parse(localStorage.getItem(`project${e}`)),n=o(t.name,t.todos);a.pushStorage(n),l(n)}}(),document.getElementById("addProject").addEventListener("click",(()=>{!function(){let e=document.getElementById("mainCont");for(;e.firstChild;)e.removeChild(e.lastChild);let t=document.createElement("div");t.id="projectAddCont",e.appendChild(t);let n=document.createElement("input");n.id="projectInput",n.placeholder="Project's name",t.appendChild(n);let o=document.createElement("button");o.id="addBtn",o.innerHTML="Add",t.appendChild(o);let r=document.createElement("button");r.id="cancelBtn",r.innerHTML="Cancel",t.appendChild(r),o.addEventListener("click",d),r.addEventListener("click",c),n.focus()}()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJREpGLFdBRVgsSUFBSSxJQUFJK0IsRUFBSSxFQUFHQSxFQUFJdkIsYUFBYUUsT0FBUXFCLElBQUssQ0FDekMsTUFBTW5ELEVBQVErQixLQUFLcUIsTUFBTXhCLGFBQWF5QixRQUFRLFVBQVVGLE1BQ2xERyxFQUFVLEVBQVF0RCxFQUFNTSxLQUFNTixFQUFNaUMsT0FDMUNoQixFQUFTaUIsWUFBWW9CLEdBQ3JCTCxFQUFTSyxFQUViLENBQ0osQ0NHQUMsR0FHQWpDLFNBQVNDLGVBQWUsY0FBY2dCLGlCQUFpQixTQUFTLE1GZmpELFdBRVgsSUFBSU0sRUFBV3ZCLFNBQVNDLGVBQWUsWUFDdkMsS0FBTXNCLEVBQVNDLFlBQ1hELEVBQVNFLFlBQVlGLEVBQVNHLFdBR2xDLElBQUlRLEVBQU1sQyxTQUFTZSxjQUFjLE9BQ2pDbUIsRUFBSWhELEdBQUssaUJBQ1RxQyxFQUFTUCxZQUFZa0IsR0FDckIsSUFBSUMsRUFBZW5DLFNBQVNlLGNBQWMsU0FDMUNvQixFQUFhakQsR0FBSyxlQUNsQmlELEVBQWFDLFlBQWMsaUJBQzNCRixFQUFJbEIsWUFBWW1CLEdBQ2hCLElBQUlFLEVBQVNyQyxTQUFTZSxjQUFjLFVBQ3BDc0IsRUFBT25ELEdBQUssU0FDWm1ELEVBQU9sQyxVQUFZLE1BQ25CK0IsRUFBSWxCLFlBQVlxQixHQUNoQixJQUFJQyxFQUFZdEMsU0FBU2UsY0FBYyxVQUN2Q3VCLEVBQVVwRCxHQUFLLFlBQ2ZvRCxFQUFVbkMsVUFBWSxTQUN0QitCLEVBQUlsQixZQUFZc0IsR0FHaEJELEVBQU9wQixpQkFBaUIsUUFBU3ZCLEdBQ2pDNEMsRUFBVXJCLGlCQUFpQixRQUFTSyxHQUVwQ2EsRUFBYUksT0FDakIsQ0VaSUMsRUFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2xvYWRQcm9qZWN0c09uTG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjb3VudGVyQ3JlYXRvciA9ICgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvbnN0IGdldENvdW50ID0gKCkgPT4gY291bnQ7XG4gICAgY29uc3QgaW5jcmVtZW50Q291bnQgPSAoKSA9PiBjb3VudCsrOyBcbiAgICByZXR1cm4geyBnZXRDb3VudCwgaW5jcmVtZW50Q291bnQgfTtcbiAgfTtcblxuY29uc3QgY291bnRlciA9IGNvdW50ZXJDcmVhdG9yKCk7XG5cbmNvbnN0IFByb2plY3QgPSAobmFtZSwgdG9Eb3NMaXN0ID0gW10pID0+IHtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgICBjb25zdCBpZCA9IGNvdW50ZXIuZ2V0Q291bnQoKTtcbiAgICBjb3VudGVyLmluY3JlbWVudENvdW50KCk7XG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcbiAgICBjb25zdCB0b0RvcyA9IHRvRG9zTGlzdDtcbiAgICBjb25zdCBhZGRUb0RvcyA9ICh0b2RvKSA9PiB0b0Rvcy5wdXNoKCk7XG4gICAgY29uc3QgZ2V0VG9Eb3MgPSAoKSA9PiB0b0RvcztcbiAgICByZXR1cm4ge2dldE5hbWUsIGdldElkLCBnZXRUb0RvcywgYWRkVG9Eb3N9O1xufSBcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGFjdGl2ZVByb2plY3QgfSBmcm9tICcuL3Byb2plY3RTZWxlY3Rvci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgLy8gY2xlYXJzIHRoZSBpbnRlcmZhY2UgXG4gICAgbGV0IG1haW5Db250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250Jyk7XG4gICAgd2hpbGUobWFpbkNvbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluQ29udC5yZW1vdmVDaGlsZChtYWluQ29udC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBjcmVhdGVzIHRoZSBpbnRlcmZhY2Ugd2hlcmUgdGhlIHVzZXIgbWFrZXMgbmV3IHRvZG9zIFxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaWQgPSAncHJvamVjdEFkZENvbnQnO1xuICAgIG1haW5Db250LmFwcGVuZENoaWxkKGRpdik7XG4gICAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdElucHV0LmlkID0gJ3Byb2plY3RJbnB1dCc7XG4gICAgcHJvamVjdElucHV0LnBsYWNlaG9sZGVyID0gJ1Byb2plY3RcXCdzIG5hbWUnO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uaWQgPSAnYWRkQnRuJztcbiAgICBhZGRCdG4uaW5uZXJIVE1MID0gJ0FkZCc7XG4gICAgZGl2LmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5pZCA9ICdjYW5jZWxCdG4nO1xuICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSAnQ2FuY2VsJztcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgIC8vYnV0dG9ucyBmdW5jdGlvbmFsaXRpZXNcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRCdG5Mb2dpYyk7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQnRuTG9naWMpO1xuICAgIC8vUW9MIHRoaW5nc1xuICAgIHByb2plY3RJbnB1dC5mb2N1cygpO1xufTtcblxuZnVuY3Rpb24gYWRkQnRuTG9naWMoKSB7XG4gICAgLy8gbWFrZXMgc3VyZSB0aGF0IHRoZXJlIGFyZSBubyBtYXRoY2luZyBvciBlbXB0eSBpZHNcbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3RzID0gUHJvamVjdHMuZ2V0U3RvcmFnZSgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lcyA9IGV4aXN0aW5nUHJvamVjdHMubWFwKHAgPT4gcC5nZXROYW1lKCkpO1xuICAgIGlmKHByb2plY3ROYW1lcy5zb21lKG5hbWUgPT4gbmFtZSA9PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElucHV0JykudmFsdWUpKSB7XG4gICAgICAgIGFsZXJ0KCdUaGUgbmFtZXMgaGF2ZSB0byBiZSB1bmlxdWUnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RJbnB1dCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfSBlbHNlIGlmICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RJbnB1dCcpLnZhbHVlKS5yZXBsYWNlKC9cXHMvZywgXCJcIikgPT0gXCJcIikge1xuICAgICAgICBhbGVydCgnWW91IG11c3QgYWRkIGEgbmFtZSB0byB5b3VyIHByb2plY3QnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RJbnB1dCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlcyBhIG5ldyBQcm9qZWN0IGluc2F0bmNlIGJhc2VkIG9uIGlucHV0c1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElucHV0JykudmFsdWUpO1xuICAgICAgICAvLyBzdG9yZXMgdGhlIGluZm9ybWF0aW9uIHRoYXQgYXJlIG5lZWRlZCB0byByZWNyZWF0IHRoZSBpbnN0YW5jZSB3aGVuIHRoZSBwYWdlcyBsb2FkZWQgaW4gYWdhaW5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHByb2plY3Qke2xvY2FsU3RvcmFnZS5sZW5ndGh9YCwgSlNPTi5zdHJpbmdpZnkoe25hbWU6IG5ld1Byb2plY3QuZ2V0TmFtZSgpLCBpZDogbmV3UHJvamVjdC5nZXRJZCgpLCB0b2RvczogbmV3UHJvamVjdC5nZXRUb0RvcygpfSkpO1xuICAgICAgICAvLyBzdG9yZXMgdGhlIGluc2FuY2Ugc28gaXQgaXMgYWNjZXNhYmxlIGxhdGVyIG9uXG4gICAgICAgIFByb2plY3RzLnB1c2hTdG9yYWdlKG5ld1Byb2plY3QpO1xuICAgICAgICAvLyBjcmVhdGVzIHdoYXQgaXMgZ29uYSBiZSBkaXNwbGF5ZWRcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcbiAgICAgICAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBuZXdMaS5pZCA9IG5ld1Byb2plY3QuZ2V0SWQoKTtcbiAgICAgICAgbmV3TGkuaW5uZXJIVE1MID0gbmV3UHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKG5ld0xpKTtcbiAgICAgICAgbmV3TGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LmdldElkKCkpXG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0ID0gUHJvamVjdHMuZ2V0U3RvcmFnZSgpW25ld1Byb2plY3QuZ2V0SWQoKV07IFxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgaGlkZVVJKCk7XG4gICAgfTsgXG5cbn07XG5cbmZ1bmN0aW9uIGNhbmNlbEJ0bkxvZ2ljKCkge1xuICAgIGhpZGVVSSgpXG59XG5cbmZ1bmN0aW9uIGhpZGVVSSgpIHtcbiAgICBsZXQgbWFpbkNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnQnKTtcbiAgICB3aGlsZShtYWluQ29udC5maXJzdENoaWxkKSB7XG4gICAgICAgIG1haW5Db250LnJlbW92ZUNoaWxkKG1haW5Db250Lmxhc3RDaGlsZCk7XG4gICAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHsgYWN0aXZlUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdFNlbGVjdG9yLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgLy8gZ2V0cyBhbGwgcHJvamVjdHMgYW5kIHJlY3JlYXRlcyB0aGUgUHJvamVjdCBpbnN0YW5jaWVzXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3Qke2l9YCkpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdCh2YWx1ZS5uYW1lLCB2YWx1ZS50b2Rvcyk7XG4gICAgICAgIFByb2plY3RzLnB1c2hTdG9yYWdlKHByb2plY3QpO1xuICAgICAgICBhZGRUb0RvbShwcm9qZWN0KTtcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkVG9Eb20ocCkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RMaXN0Jyk7XG4gICAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG5ld0xpLmlkID0gcC5nZXRJZCgpO1xuICAgIG5ld0xpLmlubmVySFRNTCA9IHAuZ2V0TmFtZSgpO1xuICAgIHVsLmFwcGVuZENoaWxkKG5ld0xpKTsgICBcbiAgICBuZXdMaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocC5nZXRJZCgpKVxuICAgICAgICBhY3RpdmVQcm9qZWN0ID0gUHJvamVjdHMuZ2V0U3RvcmFnZSgpW3AuZ2V0SWQoKV07IFxuICAgIH0pXG59XG5cbiIsImltcG9ydCBhZGRQcm9qZWN0IGZyb20gJy4vYWRkUHJvamVjdC5qcyc7XG5pbXBvcnQgbG9hZFByb2plY3RzT25Mb2FkIGZyb20gJy4vbG9hZFByb2plY3RzT25Mb2FkLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyBhY3RpdmVQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0U2VsZWN0b3IuanMnO1xuZXhwb3J0IHtQcm9qZWN0c31cblxuXG4vLyB0aGlzIGlzIHdoZXJlIHRoZSBQcm9qZWN0IGluc3RhbmNlcyBhcmUgc3Ryb3JlZFxuY29uc3QgUHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBbXTtcbiAgICBjb25zdCBnZXRTdG9yYWdlID0gKCkgPT4gc3RvcmFnZTtcbiAgICBjb25zdCBwdXNoU3RvcmFnZSA9IChwKSA9PiBzdG9yYWdlLnB1c2gocClcbiAgICByZXR1cm4ge2dldFN0b3JhZ2UsIHB1c2hTdG9yYWdlfVxufSkoKTtcblxuLy8gbG9hZHMgdGhlIFByb2plY3QgaW5zdGFuY2VzIHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxubG9hZFByb2plY3RzT25Mb2FkKCk7XG5cbi8vIHByb2plY3QgYWRkIGJ1dHRvbiBcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkUHJvamVjdCgpO1xufSk7Il0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJleHBvcnRzIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsImNvdW50ZXIiLCJjb3VudCIsImdldENvdW50IiwiaW5jcmVtZW50Q291bnQiLCJjb3VudGVyQ3JlYXRvciIsIm5hbWUiLCJ0b0Rvc0xpc3QiLCJpZCIsInRvRG9zIiwiZ2V0TmFtZSIsImdldElkIiwiZ2V0VG9Eb3MiLCJhZGRUb0RvcyIsInRvZG8iLCJwdXNoIiwiYWRkQnRuTG9naWMiLCJQcm9qZWN0cyIsImdldFN0b3JhZ2UiLCJtYXAiLCJwIiwic29tZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhbGVydCIsImlubmVySFRNTCIsInJlcGxhY2UiLCJuZXdQcm9qZWN0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b2RvcyIsInB1c2hTdG9yYWdlIiwidWwiLCJuZXdMaSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlUHJvamVjdCIsImhpZGVVSSIsImNhbmNlbEJ0bkxvZ2ljIiwibWFpbkNvbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJhZGRUb0RvbSIsInN0b3JhZ2UiLCJpIiwicGFyc2UiLCJnZXRJdGVtIiwicHJvamVjdCIsImxvYWRQcm9qZWN0c09uTG9hZCIsImRpdiIsInByb2plY3RJbnB1dCIsInBsYWNlaG9sZGVyIiwiYWRkQnRuIiwiY2FuY2VsQnRuIiwiZm9jdXMiLCJhZGRQcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==