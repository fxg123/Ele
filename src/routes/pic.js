function picture(n) {
    return   'https://cube.elemecdn.com/' + (n).replace((n).charAt(0),(n).charAt(0)+'/').replace((n).substring(1,3),(n).charAt(1)+(n).charAt(2)+'/').concat('.jpeg')  
}
function picturep(n) {
    return   'https://cube.elemecdn.com/' + (n).replace((n).charAt(0),(n).charAt(0)+'/').replace((n).substring(1,3),(n).charAt(1)+(n).charAt(2)+'/').concat('.png')  
}

export default {
    picture,
    picturep
}