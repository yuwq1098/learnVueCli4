module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-var-requires': 0, // jsx中， 不需要变量声明, 所以不提示报错
        'prettier/prettier': 0, // 使用prettier的格式化，但提示报错信息
        'class-methods-use-this': 0, // 类方法声明后， 必须使用它
        'generator-star-spacing': 0, // 生成器函数*的前后空格
        'space-before-function-paren': [0, 'always'], //函数定义时括号前面要不要有空格
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        quotes: [2, 'single'], // 单引号
        indent: [2, 4], // 缩进风格
        'new-cap': 0, // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
        'no-continue': 0, // 禁止使用continue
        'linebreak-style': 'off', // 换行风格
        'no-var': 2, // 对var警告
        semi: 0, // 不强制使用分号
        'no-irregular-whitespace': 2, // 不规则的空白不允许
        'no-trailing-spaces': 0, // 一行结束后面有空格就发出警告
        'eol-last': 0, // 文件以单一的换行符结束
        'no-unused-vars': 0, //不能有声明后未被使用的变量或参数
        'no-underscore-dangle': 0, // 标识符不能以_开头或结尾
        'no-alert': 2, // 禁止使用alert confirm prompt
        'no-lone-blocks': 0, // 禁止不必要的嵌套块
        'no-class-assign': 2, // 禁止给类赋值
        'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
        'no-const-assign': 2, // 禁止修改const声明的变量
        'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
        'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复
        'no-duplicate-case': 2, // switch中的case标签不能重复
        'no-dupe-args': 2, // 函数参数不能重复
        'no-empty': 2, // 块语句中的内容不能为空
        'no-func-assign': 2, // 禁止重复的函数声明
        'no-invalid-this': 0, // 禁止无效的this，只能用在构造器，类，对象字面量
        'no-redeclare': 2, // 禁止重复声明变量
        'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
        'no-this-before-super': 0, // 在调用super()之前不能使用this或super
        'no-undef': 0, // 不能有未定义的变量
        'no-use-before-define': 2, // 未定义前不能使用
        'jsx-quotes': [2, 'prefer-double'], // 强制在JSX属性（jsx-quotes）中一致使用双引号
        'vue/require-valid-default-prop': 'off',
    },
}
