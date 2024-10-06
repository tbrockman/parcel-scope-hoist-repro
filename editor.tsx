import { useCodeMirror } from "@uiw/react-codemirror"
import * as cm from '@uiw/react-codemirror'

export default function Editor() {
    const test = useCodeMirror({}) // $exports is not defined
    console.log(test)
    
    // Uncomment the following (and comment out the above) to see a working workaround
    // console.log(cm) // this line is required (or some other reference to cm)
    // const test = cm.useCodeMirror({}) // strangely, this works
}