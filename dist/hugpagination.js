!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.HugPaginationJS=e():t.HugPaginationJS=e()}(self,(function(){return(()=>{"use strict";var t={d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.d(e,{default:()=>i});const i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options={};var i={trigger:{selector:null},type:"default",totalItems:0,totalPages:0,currentPage:1,pageSize:10,maxPages:10,data:[]};if(!e)throw new Error("Missing input argument");i.totalItems=e,"object"===o(n)?this.options=Object.assign({},i,n):this.options=i}var e,i;return e=t,(i=[{key:"init",value:function(){var t=this.options.data.length>0?this.options.data.length:this.options.totalItems;if(0===t)throw new Error("There is no data");return this.resolvePagination(t)}},{key:"resolvePagination",value:function(t){var e=Math.ceil(t/this.options.pageSize);this.options.totalPages=e,this.options.currentPage<1?this.options.currentPage=1:this.options.currentPage>e&&(this.options.currentPage=e);var o=0,n=0;if(e<=this.options.maxPages)o=1,n=e;else{var i=Math.floor(this.options.maxPages/2),r=Math.ceil(this.options.maxPages/2)-1;this.options.currentPage<=i?(o=1,n=this.options.maxPages):this.options.currentPage+r>=e?(o=e-this.options.maxPages+1,n=e):(o=this.options.currentPage-i,n=this.options.currentPage+r)}var a=(this.options.currentPage-1)*this.options.pageSize,s=Math.min(a+this.options.pageSize-1,t-1),p=Array.from(Array(n+1-o).keys()).map((function(t){return o+t}));return{totalItems:t,currentPage:this.options.currentPage,pageSize:this.options.pageSize,data:this.options.data,trigger:this.options.trigger,totalPages:e,startPage:o,endPage:n,startIndex:a,endIndex:s,pages:p}}},{key:"getTrigger",value:function(){return this.options.trigger}},{key:"getPagination",value:function(){return this.options}}])&&n(e.prototype,i),t}();return e.default})()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IdWdQYWdpbmF0aW9uSlMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0h1Z1BhZ2luYXRpb25KUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IdWdQYWdpbmF0aW9uSlMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0h1Z1BhZ2luYXRpb25KUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0h1Z1BhZ2luYXRpb25KUy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJzZWxmIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInRvdGFsSXRlbXMiLCJvcHRpb25zIiwidGhpcyIsImRlZmF1bHRzIiwidHJpZ2dlciIsInNlbGVjdG9yIiwidHlwZSIsInRvdGFsUGFnZXMiLCJjdXJyZW50UGFnZSIsInBhZ2VTaXplIiwibWF4UGFnZXMiLCJkYXRhIiwiRXJyb3IiLCJhc3NpZ24iLCJsZW5ndGgiLCJyZXNvbHZlUGFnaW5hdGlvbiIsIk1hdGgiLCJjZWlsIiwic3RhcnRQYWdlIiwiZW5kUGFnZSIsIm1heFBhZ2VzQmVmb3JlQ3VycmVudFBhZ2UiLCJmbG9vciIsIm1heFBhZ2VzQWZ0ZXJDdXJyZW50UGFnZSIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsIm1pbiIsInBhZ2VzIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiJDQUFBLFNBQTJDQSxFQUFNQyxHQUMxQixpQkFB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QVVBLEVBQ1ZFLE1BQU9BLEssd0JBUVgsV0FDRSxPQUFPeEIsS0FBS0QsUUFBUUcsVSwyQkFHdEIsV0FDRSxPQUFPRixLQUFLRCxhIiwiZmlsZSI6Imh1Z3BhZ2luYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIdWdQYWdpbmF0aW9uSlNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSHVnUGFnaW5hdGlvbkpTXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJjbGFzcyBIdWdQYWdpbmF0aW9uIHtcblxuICBjb25zdHJ1Y3Rvcih0b3RhbEl0ZW1zLCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcblxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgdHJpZ2dlcjoge1xuICAgICAgICBzZWxlY3RvcjogbnVsbFxuICAgICAgfSxcbiAgICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICAgIHRvdGFsSXRlbXM6IDAsXG4gICAgICB0b3RhbFBhZ2VzOiAwLFxuICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICBtYXhQYWdlczogMTAsXG4gICAgICBkYXRhOiBbXVxuICAgIH1cblxuICAgIGlmKCF0b3RhbEl0ZW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgaW5wdXQgYXJndW1lbnQnKVxuICAgIH1cblxuICAgIGRlZmF1bHRzLnRvdGFsSXRlbXMgPSB0b3RhbEl0ZW1zXG5cbiAgICBpZih0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBkZWZhdWx0c1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgICBsZXQgdG90YWxJdGVtcyA9IHRoaXMub3B0aW9ucy5kYXRhLmxlbmd0aCA+IDBcbiAgICAgID8gdGhpcy5vcHRpb25zLmRhdGEubGVuZ3RoXG4gICAgICA6IHRoaXMub3B0aW9ucy50b3RhbEl0ZW1zXG5cbiAgICBpZiAodG90YWxJdGVtcyA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBpcyBubyBkYXRhJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlUGFnaW5hdGlvbih0b3RhbEl0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYWdpbmF0aW9uIHJlc29sdmVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsSXRlbXNcbiAgICogQHJldHVybnMgT2JqZWN0XG4gICAqL1xuICByZXNvbHZlUGFnaW5hdGlvbih0b3RhbEl0ZW1zKSB7XG5cbiAgICBsZXQgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gdGhpcy5vcHRpb25zLnBhZ2VTaXplKVxuXG4gICAgdGhpcy5vcHRpb25zLnRvdGFsUGFnZXMgPSB0b3RhbFBhZ2VzXG5cbiAgICAvLyBlbnN1cmUgY3VycmVudCBwYWdlIGlzbid0IG91dCBvZiByYW5nZVxuICAgIGlmICh0aGlzLm9wdGlvbnMuY3VycmVudFBhZ2UgPCAxKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY3VycmVudFBhZ2UgPSAxXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY3VycmVudFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY3VycmVudFBhZ2UgPSB0b3RhbFBhZ2VzXG4gICAgfVxuXG4gICAgbGV0IHN0YXJ0UGFnZSA9IDBcbiAgICBsZXQgZW5kUGFnZSAgID0gMFxuXG4gICAgaWYgKHRvdGFsUGFnZXMgPD0gdGhpcy5vcHRpb25zLm1heFBhZ2VzKSB7XG4gICAgICAvLyB0b3RhbCBwYWdlcyBsZXNzIHRoYW4gbWF4IHNvIHNob3cgYWxsIHBhZ2VzXG4gICAgICBzdGFydFBhZ2UgPSAxO1xuICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRvdGFsIHBhZ2VzIG1vcmUgdGhhbiBtYXggc28gY2FsY3VsYXRlIHN0YXJ0IGFuZCBlbmQgcGFnZXNcbiAgICAgIGxldCBtYXhQYWdlc0JlZm9yZUN1cnJlbnRQYWdlID0gTWF0aC5mbG9vcih0aGlzLm9wdGlvbnMubWF4UGFnZXMgLyAyKVxuICAgICAgbGV0IG1heFBhZ2VzQWZ0ZXJDdXJyZW50UGFnZSA9IE1hdGguY2VpbCh0aGlzLm9wdGlvbnMubWF4UGFnZXMgLyAyKSAtIDFcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jdXJyZW50UGFnZSA8PSBtYXhQYWdlc0JlZm9yZUN1cnJlbnRQYWdlKSB7XG4gICAgICAgIC8vIGN1cnJlbnQgcGFnZSBuZWFyIHRoZSBzdGFydFxuICAgICAgICBzdGFydFBhZ2UgPSAxXG4gICAgICAgIGVuZFBhZ2UgPSB0aGlzLm9wdGlvbnMubWF4UGFnZXNcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmN1cnJlbnRQYWdlICsgbWF4UGFnZXNBZnRlckN1cnJlbnRQYWdlID49IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgLy8gY3VycmVudCBwYWdlIG5lYXIgdGhlIGVuZFxuICAgICAgICBzdGFydFBhZ2UgPSB0b3RhbFBhZ2VzIC0gdGhpcy5vcHRpb25zLm1heFBhZ2VzICsgMVxuICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3VycmVudCBwYWdlIHNvbWV3aGVyZSBpbiB0aGUgbWlkZGxlXG4gICAgICAgIHN0YXJ0UGFnZSA9IHRoaXMub3B0aW9ucy5jdXJyZW50UGFnZSAtIG1heFBhZ2VzQmVmb3JlQ3VycmVudFBhZ2VcbiAgICAgICAgZW5kUGFnZSA9IHRoaXMub3B0aW9ucy5jdXJyZW50UGFnZSArIG1heFBhZ2VzQWZ0ZXJDdXJyZW50UGFnZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNhbGN1bGF0ZSBzdGFydCBhbmQgZW5kIGl0ZW0gaW5kZXhlc1xuICAgIGxldCBzdGFydEluZGV4ID0gKHRoaXMub3B0aW9ucy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5vcHRpb25zLnBhZ2VTaXplXG4gICAgbGV0IGVuZEluZGV4ID0gTWF0aC5taW4oc3RhcnRJbmRleCArIHRoaXMub3B0aW9ucy5wYWdlU2l6ZSAtIDEsIHRvdGFsSXRlbXMgLSAxKVxuXG4gICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIHBhZ2VzIHRvIG5nLXJlcGVhdCBpbiB0aGUgcGFnZXIgY29udHJvbFxuICAgIGxldCBwYWdlcyA9IEFycmF5LmZyb20oQXJyYXkoKGVuZFBhZ2UgKyAxKSAtIHN0YXJ0UGFnZSkua2V5cygpKS5tYXAoaSA9PiBzdGFydFBhZ2UgKyBpKVxuXG4gICAgLy8gcmV0dXJuIG9iamVjdCB3aXRoIGFsbCBwYWdlciBwcm9wZXJ0aWVzIHJlcXVpcmVkIGJ5IHRoZSB2aWV3XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsSXRlbXM6IHRvdGFsSXRlbXMsXG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5vcHRpb25zLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnZVNpemU6IHRoaXMub3B0aW9ucy5wYWdlU2l6ZSxcbiAgICAgIGRhdGE6IHRoaXMub3B0aW9ucy5kYXRhLFxuICAgICAgdHJpZ2dlcjogdGhpcy5vcHRpb25zLnRyaWdnZXIsXG4gICAgICB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2VzLFxuICAgICAgc3RhcnRQYWdlOiBzdGFydFBhZ2UsXG4gICAgICBlbmRQYWdlOiBlbmRQYWdlLFxuICAgICAgc3RhcnRJbmRleDogc3RhcnRJbmRleCxcbiAgICAgIGVuZEluZGV4OiBlbmRJbmRleCxcbiAgICAgIHBhZ2VzOiBwYWdlc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlclxuICAgKiBAcmV0dXJucyBPYmplY3RcbiAgICovXG4gIGdldFRyaWdnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50cmlnZ2VyXG4gIH1cblxuICBnZXRQYWdpbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIdWdQYWdpbmF0aW9uXG4iXSwic291cmNlUm9vdCI6IiJ9