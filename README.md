# testTask-Map-App
После установки приложения и установки всех пакетов необходимо будет прописать 
типы для интерфейса в компоненте GoogleMapReact. 
1. Для этого в файле Map.tsx перейти в компонент GoogleMapReact и в export interface Props center: 
указать или currentCoords или any.
2. В этом же интерфейсе добавить onDragEnd?(args: any): void;
