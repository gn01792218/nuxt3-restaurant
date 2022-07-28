export default function useDarkMode(){
    //使用useState建立一個State資料，第一個參數是key值，第二個參數是初始值
    const darkMode = useState('darkMode',()=> true)
    function toggleDarkMode (){
        darkMode.value = !darkMode.value
    }
    return {
        //data
        darkMode,
        //methods
        toggleDarkMode,
    }
}