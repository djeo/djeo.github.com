//>>built
define("djeo-demos/race/util",["djeo/util/_base"],function(j){return{getInitialPositions:function(a,f,b){for(var c=0,g=a[c],h=a[a.length-2],h=[[g,Math.atan2(g[0]-h[0],g[1]-h[1])]],i=1;i<f;i++){var d=this.movePointAlongTrack(g,b,a,c,!1),g=d[0],c=d[1];h.push([g,d[2]])}return h},movePointAlongTrack:function(a,f,b,c,g){for(var h=b.length,i;;){i=c;var c=g?c<h-1?c+1:1:c>0?c-1:h-2,d=b[c],e;e=a[0];var k=a[1],m=d[0],l=d[1];e=j.degToRad(e);k=j.degToRad(k);m=j.degToRad(m);l=j.degToRad(l);e=Math.pow(Math.sin((l-
k)/2),2)+Math.cos(k)*Math.cos(l)*Math.pow(Math.sin((m-e)/2),2);e=6378137*2*Math.atan2(Math.sqrt(e),Math.sqrt(1-e));if(e>=f)return f/=e,a=[a[0]*(1-f)+d[0]*f,a[1]*(1-f)+d[1]*f],d=b[i],b=b[c],b=Math.atan2(b[0]-d[0],b[1]-d[1]),[a,i,g?b:b-Math.PI];else a=d,f-=e}}}});