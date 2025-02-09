import MapView from '@arcgis/core/views/MapView';
import Map from "@arcgis/core/Map";
import Zoom from "@arcgis/core/widgets/Zoom";
import { version } from '../../lib';
export enum ENV {
    DEFAULT = "",
    JSAPI = 'jsapi',
    THREE = 'three',
    CANVAS = 'canvas',
    WEBGL2 = 'webgl2',
};
export type LinkInfo = {
    id: string;
    env: ENV;
    subLinks?: LinkInfo[];
    keywords?: string[];
    load?: (param: { containerID: string; view: MapView | HTMLElement | undefined; }) => Promise<any>;
} | 'divider';
interface Params {
    idContainer: string;
    idApp: string;
    env: ENV;
    view?: MapView
};
// ......................................... set A
const DesignDataMenu: LinkInfo = {
    id: 'Data-&-Design:-Code-for-Design', env: ENV.DEFAULT, keywords: ['data design lecture computational design gis vector raster data thinking process'], subLinks: [
        { id: 'Data-and-Design', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Design-Data-Computational-Design').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Data-and-Design-slides', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Design-Data-Computational-Design-slides').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Data-and-Design-Lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Design-Data').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
    ]
};
const ProgrammingDataProcessMenu: LinkInfo = {
    id: 'Programming-and-Data-Process', env: ENV.DEFAULT, keywords: ['python programming python numpy pandas data processing'], subLinks: [
        { id: 'Code-For-Design-and-Programming', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Code-For-Design').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'Computational-Design-Thinking', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Computational-Design-Thinking').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'Python-Code-(GitHub)', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/Link-Programming-Data-Processing').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        'divider',
        { id: '[Cheat Sheet] Python, List, Data Types, Class, Pandas, Numpy, SKlearn', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Cheat-Sheet-A').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: '[Cheat Sheet] Machine Learning, Deep Learning, Artificial Intelligence, Keras, Neural Networks, Skicit-learn, Pandas Data Science', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Cheat-Sheet-B').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        'divider',
        
        { id: 'Installation', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/installation?ui=0'); }); } },
    ]
};
// ......................................... set B
const VectorMenu: LinkInfo = {
    id: 'Vector-&-Point', env: ENV.DEFAULT, keywords: ['project research third place data visualization'], subLinks: [     
        { id: 'Vector-&-Point-lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/lab-vector-&-point-discrete-design-data/vector?ui=0'); }); } },
        'divider',
        { id: 'Vector-and-Operation', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Data-Vector-operation').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
    
        { id: 'Third-vec-start', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/Project_01_vec').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Third-vec-basic', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/Project_02_vec').then(({ Solution }) => { return new Solution(param.containerID) }); } },
    ]
};
const CurveMenu: LinkInfo = {
    id: 'Vector-Line-&-Polyline-&-Curve', env: ENV.DEFAULT, keywords: ['computation design data vector raster color'], subLinks: [
        { id: 'Vector-Line-&-Polyline-&-Curve-lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/lab-curve-discrete-design-data/line-curve?ui=0'); }); } },
        'divider',
        
        { id: 'NURBS-Curve', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/lab-curve-discrete-design-data/nurbs-curve?ui=0'); }); } },
    ]
};
const SurfaceMenu: LinkInfo = {
    id: 'Vector-Surface-&-Brep', env: ENV.DEFAULT, keywords: ['computation design data vector raster color'], subLinks: [
        { id: 'Vector-Surface-&-Brep-lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/lab-curve-discrete-design-data/surface-brep?ui=0'); }); } },
        'divider',

        { id: 'NURBS-Surface', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/lab-curve-discrete-design-data/nurbs-surface?ui=0'); }); } },
        
    ]
};
// ......................................... set C
const OOPMenu: LinkInfo = {
    id: 'OOP-Data-Structure-and-Processing', env: ENV.DEFAULT, keywords: ['computation design data vector raster color'], subLinks: [
        { id: 'OOP-Data-Structure-and-Processing-lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/lab-computational-thinking-typescript/oop?ui=0'); }); } },
        'divider',
        { id: 'Typescript-syntax', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/01_Typescript_Basics').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Condition-Loop', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/02_Condition_Loop').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Data-Structure-and-Format', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/03_Data_Structure').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Function-and-Class', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/04_Function_Class').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Animal-Class', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/04_Function_Class/Animal').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        'divider',
        { id: 'Exercise', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/05_Exercise').then(({ Solution }) => { return new Solution(param.containerID) }); } },



        { id: 'Geometry', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Data-Geometry').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
    ]
};
// ......................................... set D
const meshMenu: LinkInfo = {
    id: 'Discretization-Mesh-&-Partitions-&-Spatial-Info', env: ENV.DEFAULT, keywords: ['geometry computation design data'], subLinks: [
        { id: 'Discretization-Mesh-&-Partitions-&-Spatial-Info-lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/lab-graph-&-network-discrete-design-data/vector-discretization-partitions-mesh?ui=0'); }); } },
        'divider',
        { id: 'Geometry-for-Design', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Geometry-for-design').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        'divider',
        { id: 'Geometry-(Python)', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/Link-Geometry-Python-Code').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        'divider',
        { id: 'Canvas-Point-Circle', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_04_Line_Curve/LAB_Web_01_Point_Circle').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Canvas-Line-Polyline', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_04_Line_Curve/LAB_Web_02_Line_Polyline').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Canvas-Polyline-mouse-input', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_04_Line_Curve/LAB_Web_03_Polyline-Mouse-Input').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Canvas-Polygon', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_04_Line_Curve/LAB_Web_04_Polygon').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        'divider',
        { id: 'Three-Mesh', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_04_Line_Curve/LAB_Web_05_Mesh').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Mesh-Rhino', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_04_Line_Curve/LAB_Web_06_MeshRhino').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        'divider',
        { id: 'Geometry-As-Data-Structure', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_04_Line_Curve/LAB_Web_07_GeometryAsDataStructure').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Graph', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_04_Line_Curve/LAB_Web_08_Graph').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Pixel', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_04_Line_Curve/LAB_Web_09_Pixel').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        { id: 'Voxel', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_04_Line_Curve/LAB_Web_10_Voxel').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
    ]
};
const graphMenu: LinkInfo = {
    id: 'Vector-Graph-Data-structure', env: ENV.DEFAULT, keywords: ['vector graph data structure'], subLinks: [
        { id: 'Vector-Graph-Data-structure-lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/lab-graph-&-network-discrete-design-data/vector-graph?ui=0'); }); } },
        { id: 'AI-for-Design', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-ai-for-designers').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        'divider',
        { id: 'NNA', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/project-module-selected-works/nna?ui=0&env=nna'); }); } },
    ]
};
const rasterMenu: LinkInfo = {
    id: 'Raster-Pixel-&-Voxel-Data-Structure', env: ENV.DEFAULT, keywords: ['raster pixel voxel data structure'], subLinks: [
        { id: 'Raster-Pixel-&-Voxel-Data-Structure-lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/lab-raster-&-color-continuous-design-data/raster?ui=0'); }); } },
        { id: 'Color-as-data-lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/lab-raster-&-color-continuous-design-data/color-as-data?ui=0'); }); } },
        'divider',
        
        { id: 'A-star', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/geometry-spatial-tools/a-star?ui=0&demo'); }); } },
        { id: 'Data-Structure-and-Algorithm-for-Design-and-Research-lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/lab-pixel-&-voxel-map-continuous-design-data/raster-pixel-voxel?ui=0'); }); } },
    ]
};
// ......................................... set E
const aimlMenu: LinkInfo = {
    id: 'AI,-ML,-Data-driven-programming', env: ENV.DEFAULT, keywords: ['AI, ML, Data driven programming'], subLinks: [
        { id: 'AI-for-Design', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-ai-for-designers').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement) }); } },
        'divider',
        { id: 'ML-Python-code', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/Link-ML-Python-Code').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'TFJS-Tensor', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_10_AI_Model_Implementation/PART_06_Problem_Data_Model_Train_Validation/LAB_Web_01_Tensor').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'TFJS-Linear-Regression', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_10_AI_Model_Implementation/PART_06_Problem_Data_Model_Train_Validation/LAB_Web_02_ModelLinearRegression').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'TFJS-MPG', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_10_AI_Model_Implementation/PART_06_Problem_Data_Model_Train_Validation/LAB_Web_03_MPGPrediction').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Polynomial-regression', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-ml-regression').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'TFJS-KNN', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-ml-knn').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'TFJS-IRIS', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_10_AI_Model_Implementation/PART_06_Problem_Data_Model_Train_Validation/LAB_Web_06_NetworkIrisPrediction').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 't-SNE-Viz', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-T-SNE').then(({ Solution }) => {  return new Solution(param.view as HTMLElement) }); } },
        'divider',
        { id: 'Smart-Drawing', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_10_AI_Model_Implementation/PART_06_Problem_Data_Model_Train_Validation/LAB_03_SmartDrawing/src/App').then(({ AppSmartDrawing }) => { return new AppSmartDrawing(param.containerID) }); } },
        { id: 'Image-Face', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-ml-image').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        { id: 'Video-Face', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/Link-ml-video').then(({ Solution }) => { return new Solution(param.view as HTMLElement) }); } },
        'divider',
    ]
};
const designAlgorithmMenu: LinkInfo = {
    id: 'Design-Algorithm-&-Dynamic-&-Opti', env: ENV.DEFAULT, keywords: ['air for design designers'], subLinks: [
        { id: 'Typescript-syntax', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/01_Typescript_Basics').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Condition-Loop', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/02_Condition_Loop').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        
    ]
};
// ......................................... set F
const visualizationMenu: LinkInfo = {
    id: '3D-&-2D-&-Data-Visualization', env: ENV.DEFAULT, keywords: ['3d visualization gis, point, line, polyline, polygon, mesh'], subLinks: [
        { id: '3D-&-2D-&-Data-Visualization-lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/lab-curve-discrete-design-data/surface-brep?ui=0'); }); } },
        'divider',
        { id: 'Three-Starter', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/LAB_Web_01_Starter-Three').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        'divider',
        { id: 'Three-Primitive', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/LAB_Web_02_PrimitiveGeometry').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Point', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/LAB_Web_03_Point').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Line-Polyline', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/LAB_Web_04_LinePolyline').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Polygon', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/LAB_Web_05_Polygon').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Mesh-Box', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/LAB_Web_06_Mesh').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Mesh-Face', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/LAB_Web_07_Mesh-Face').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Three-Mesh-Terrain', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/LAB_Web_08_Mesh-Terrain').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        'divider',
        { id: 'Three-Mesh-Vertex-Color', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/LAB_Web_10_Mesh-Vertex-Color').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        { id: 'Three-Mesh-Rhino-Geo', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/LAB_Web_11_MeshRhinoGeo').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        { id: 'Three-bunny', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/LAB_Web_12_Bunny').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        { id: 'Three-Voxel', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/LAB_Web_13_Voxel').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        'divider',
        { id: '[Link]-Code-Pen', env: ENV.THREE, keywords: [], load: (param) => { return import('../links/Link-codepen-three').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },
        'divider',
        { id: '[Link]-Slow-zone-paper', env: ENV.THREE, keywords: [], load: (param) => { return import('../links/Link-Slow-zone-paper').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },
        { id: 'Slow-zone-Point', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/Slowzone_01_Point').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        { id: 'Slow-zone-Line', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/Slowzone_02_Line').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        { id: 'Slow-zone-Polyline', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/Slowzone_03_Polyline').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        { id: 'Slow-zone-Polygon', env: ENV.THREE, keywords: [], load: (param) => { return import('../../CLASS_12_Design_Data_Visualization/LAB_Web_Visualization_3D_for_GIS/Slowzone_04_Polygon').then(({ Solution }) => { return new Solution(param.containerID); }); } },
        'divider',
        { id: 'Slow-zone-Viz-3D', env: ENV.THREE, keywords: [], load: (param) => { return import('../links/External-Slow-zone-project-3d').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },
        { id: 'Slow-zone-Viz-2D', env: ENV.THREE, keywords: [], load: (param) => { return import('../links/External-Slow-zone-project-2d').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },
    ]
};
const cadDevelopMenu: LinkInfo = {
    id: 'CAD-App-Development', env: ENV.DEFAULT, keywords: ['programming typescript computation thinking code'], subLinks: [
        { id: 'CAD-App-Development-lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/cad-app-starter-index/cad-app-starter?ui=0'); }); } },
        { id: 'Plugin-&-Addon-lecture', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://namjulee.github.io/njs-lab-public/lab/cad-app-starter-index/plugin-&-addon?ui=0'); }); } },
        'divider',
    ]
};
// ......................................... set G
const projectMenu: LinkInfo = {
    id: 'Project I & II & III', env: ENV.DEFAULT, keywords: ['programming typescript computation thinking code'], subLinks: [
        { id: 'Projects', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-embed').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement, 'https://docs.google.com/presentation/d/1Ll6W4CuIg3-IvhAvy2kSR8HMGxJ5KlnZrjLY_mZ4Mn8'); }); } },
        'divider',
        { id: 'Typescript-syntax', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/01_Typescript_Basics').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Condition-Loop', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/02_Condition_Loop').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Data-Structure-and-Format', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/03_Data_Structure').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Function-and-Class', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/04_Function_Class').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        { id: 'Animal-Class', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/04_Function_Class/Animal').then(({ Solution }) => { return new Solution(param.containerID) }); } },
        'divider',
        { id: 'Exercise', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../../CLASS_06_OOP/05_Exercise').then(({ Solution }) => { return new Solution(param.containerID) }); } },

    ]
};
export const LAB_LINKS: LinkInfo[] = [
    DesignDataMenu,
    ProgrammingDataProcessMenu,
    'divider',
    VectorMenu,
    CurveMenu,
    SurfaceMenu,
    'divider',
    OOPMenu,
    'divider',
    meshMenu,
    graphMenu,
    rasterMenu,
    'divider',
    aimlMenu,
    designAlgorithmMenu,
    'divider',
    visualizationMenu,
    cadDevelopMenu,
    'divider', 
    projectMenu,
    'divider',        
    { id: 'Reference', env: ENV.DEFAULT, keywords: [], load: (param) => { return import('../links/External-Reference').then(({ Solution }) => { return new Solution(param.view as HTMLDivElement); }); } },

];
const generateLookupTable = () => {
    const lookupTable = {}
    for (let i = 0; i < LAB_LINKS.length; ++i) {
        const link = LAB_LINKS[i];
        if (link === 'divider') { continue; }
        if (link.subLinks) {
            for (let j = 0; j < link.subLinks.length; ++j) {
                const subLink = link.subLinks[j];
                if (subLink === 'divider') { continue; }
                lookupTable[subLink.id] = subLink
            }
        } else {
            lookupTable[link.id] = link;
        }
    }
    return lookupTable as Record<string, Exclude<LinkInfo, string>>;
};
const lookupTable = generateLookupTable();
export class ControllerLabs {
    static app: any = undefined
    static init(idContainer: string, idApp: string, env: ENV) {
        console.debug('njscore', version, ', app init....!!!');
        if (this.app !== undefined) {
            this.app.destroy();
            this.app = undefined;
        }
        const param: Params = {
            idContainer,
            idApp,
            env,
        };
        if (env === ENV.JSAPI) {
            const map = new Map({
                basemap: "dark-gray-vector" // topo, dark-gray-vector, streets, streets-night-vector
            });
            const view = new MapView({
                container: idContainer,
                map,
                zoom: 15,
                center: [-71.0933575, 42.3591654],
                ui: { components: [] } // do display any widgets
            });
            view.when(() => {
                view.ui.add({
                    component: new Zoom({ view }),
                    position: 'top-right'
                })
                param.view = view;
                this.app = new ControllerLabs(param);
            });
        } else if (env === ENV.CANVAS) {
            this.app = new ControllerLabs(param);
        } else if (env === ENV.THREE) {
            this.app = new ControllerLabs(param);
        } else if (env === ENV.WEBGL2) {
            this.app = new ControllerLabs(param);
        } else if (env === ENV.DEFAULT) {
            this.app = new ControllerLabs(param);
        }
    }
    private app: any;
    constructor(param: Params) {
        this.execution(param);
    }
    public destroy() {
        if (this.app !== undefined) {
            this.app.destroy();
        }
    }
    async execution(param: Params) {
        const appID = param.idApp;
        const containerID = param.idContainer;
        let view: MapView | HTMLElement | undefined = param.view !== undefined ? param.view : undefined;
        if (param.env !== ENV.JSAPI) {
            view = document.getElementById(param.idContainer)
        }
        await this.lab(appID, containerID, view);
    }
    async lab(appID: string, containerID: string, view: MapView | HTMLElement | undefined) {
        const link = lookupTable[appID];
        this.app = await link.load({ containerID, view });
    }
}