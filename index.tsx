import { createRoot } from 'react-dom/client';
import Editor from './editor';

const root = createRoot(document.getElementById('app'));
root.render(<Editor/>);