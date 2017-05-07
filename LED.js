// <script language="javascript">
ScrollRate = 110;
 
function scrollDiv_init() {
    DivElmnt = document.getElementById('ScrollingDiv');
    ReachedMaxScroll = false;
     
    DivElmnt.scrollTop = 0;
    PreviousScrollTop  = 0;
     
    ScrollInterval = setInterval('scrollDiv()', ScrollRate);
}
 
function scrollDiv() {
     
    if (!ReachedMaxScroll) {
    // console.log("Test1")
        DivElmnt.scrollTop = PreviousScrollTop;
        PreviousScrollTop++;
         
        ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
    }
    else {
        ReachedMaxScroll = (DivElmnt.scrollTop == 0)?false:true;
        DivElmnt.scrollTop = PreviousScrollTop;
        PreviousScrollTop=PreviousScrollTop-10;
    }
}
 
function pauseDiv() {
    clearInterval(ScrollInterval);
}
 
function resumeDiv() {
    PreviousScrollTop = DivElmnt.scrollTop;
    ScrollInterval    = setInterval('scrollDiv()', ScrollRate);
}
// </script>