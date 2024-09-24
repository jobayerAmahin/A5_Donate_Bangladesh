//--------------------------Common Function

function arrowToggle(idBlog,idDown,idUp){
    document.getElementById(idDown).addEventListener('click',function(){
        document.getElementById(idBlog).classList.remove('hidden')
        document.getElementById(idDown).classList.add('hidden')
    })

    document.getElementById(idUp).addEventListener('click',function(){
        document.getElementById(idBlog).classList.add('hidden')
        document.getElementById(idDown).classList.remove('hidden')
    })
}

//-------------------------Execution

arrowToggle('blog1','down1','up1')
arrowToggle('blog2','down2','up2')
arrowToggle('blog3','down3','up3')
arrowToggle('blog4','down4','up4')