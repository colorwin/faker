const vm = {
    dependencies: [],

    obj: {
        get a() {
            vm.dependencies.push('a');
            if (vm.obj.d) {
                return vm.obj.b;
            }

            return 2;
        },
        get b() {
            vm.dependencies.push('b');
            return 1;
        },
        get d() {
            vm.dependencies.push('d');
            return vm._d;
        },
        set d(val) {
            vm._d = val;
        }
    },
    computed: {
        get c () {
            return vm.obj.a
        }
    }
};


vm.dependencies = [];
vm.obj.d = false;
console.log(vm.computed.c);
console.log('vm.c 依赖项：', vm.dependencies); // 输出： vm.c 依赖项： a, d

vm.dependencies = [];
vm.obj.d = true;
console.log(vm.computed.c);
console.log('vm.c 依赖项：', vm.dependencies); // 输出： vm.c 依赖项： a, d, b