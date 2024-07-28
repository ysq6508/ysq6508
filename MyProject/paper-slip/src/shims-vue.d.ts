// 告诉TypeScript编译器，所有以vue文件都将遵循这个声明规则

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}