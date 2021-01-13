import { BeanDefinition } from '../common';
import { SimpleContainer } from './../container/container';
/**
 * 任务管理器
 */
export class TaskManager {

    public runTask(beanDefinition: BeanDefinition): void {
        const newObject = new beanDefinition.script();
        const featureName = beanDefinition.beanName !== '' ? beanDefinition.beanName : beanDefinition.script.name;
    }
}