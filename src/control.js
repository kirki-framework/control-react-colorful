/* global wp */

import "./controls.scss";
import KirkiReactColorfulControl from './KirkiReactColorfulControl';

// Register control type with Customizer.
wp.customize.controlConstructor['kirki-react-colorful'] = KirkiReactColorfulControl;