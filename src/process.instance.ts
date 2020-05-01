import * as memoryJs from 'memoryJs';
import {IModuleObject, IModuleListEntry, MemoryTypes, IProcessObject} from 'memoryJs';
import {EMemoryTypes} from "./interfaces";

export class ProcessInstance implements IProcessObject {

    dwSize: number;
    th32ProcessID: number;
    cntThreads: number;
    th32ParentProcessID: number;
    pcPriClassBase: number;
    szExeFile: string;
    handle: number;
    modBaseAddr: number;

    modules: { [index: string]: IModuleListEntry } = {};

    constructor(exeName: string) {
        this.copyInstanceToClass(memoryJs.openProcess(exeName));
        this.getAllModules();
    }

    private copyInstanceToClass(inst: IProcessObject) {
        for (let key in inst) {
            this[key] = inst[key];
        }
    }

    getModule(moduleName): IModuleListEntry {
        if (!this.modules[moduleName]) {
            this.modules[moduleName] = memoryJs.findModule(moduleName, this.th32ProcessID);
        }
        return this.modules[moduleName];
    }

    private getAllModules(): IModuleObject {
        memoryJs.getModules(this.th32ProcessID).map(m => {
            if (m.szModule) {
                this.getModule(m.szModule);
            }
        })
    }

    readMemory(addr: any, type: EMemoryTypes) {
        return memoryJs.readMemory(this.handle, addr, type);
    }

    readMatrix(addr: any, type: EMemoryTypes) {
        return memoryJs.readMemory(this.handle, addr, type);
    }
    writeMemory(addr: any, value, type: EMemoryTypes, handle?: IModuleListEntry) {
        return memoryJs.writeMemory(this.handle, addr, value, type);
    }

    readBuffer(addr: any, size: number, handle?: IModuleListEntry) {
        return memoryJs.readBuffer(handle ? handle.hModule : this.handle, addr, size);
    }

    writeBuffer(addr: any, buffer: number, handle?: IModuleListEntry) {
        return memoryJs.writeBuffer(handle ? handle.hModule : this.handle, addr, buffer);
    }
}