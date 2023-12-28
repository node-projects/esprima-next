import * as nodes from './nodes'
import { Syntax } from './syntax';

export class Visitor {
    visit(node: nodes.Node) {
        if (node == null)
            return node;
        switch (node.type) {
            case Syntax.AssignmentExpression:
                return this.visitAssignmentExpression(node);
            case Syntax.AssignmentPattern:
                return this.visitAssignmentPattern(node);
            case Syntax.ArrayExpression:
                return this.visitArrayExpression(node);
            case Syntax.ArrayPattern:
                return this.visitArrayPattern(node);
            case Syntax.ArrowFunctionExpression:
                return this.visitArrowFunctionExpression(node);
            case Syntax.AwaitExpression:
                return this.visitAwaitExpression(node);
            case Syntax.BlockStatement:
                return this.visitBlockStatement(node);
            case Syntax.BinaryExpression:
                return this.visitBinaryExpression(node);
            case Syntax.BreakStatement:
                return this.visitBreakStatement(node);
            case Syntax.CallExpression:
                return this.visitCallExpression(node);
            case Syntax.CatchClause:
                return this.visitCatchClause(node);
            case Syntax.ChainExpression:
                return this.visitChainExpression(node);
            case Syntax.ClassBody:
                return this.visitClassBody(node);
            case Syntax.ClassDeclaration:
                return this.visitClassDeclaration(node);
            case Syntax.ClassExpression:
                return this.visitClassExpression(node);
            case Syntax.ConditionalExpression:
                return this.visitConditionalExpression(node);
            case Syntax.ContinueStatement:
                return this.visitContinueStatement(node);
            case Syntax.Decorator:
                return this.visitDecorator(node);
            case Syntax.DoWhileStatement:
                return this.visitDoWhileStatement(node);
            case Syntax.DebuggerStatement:
                return this.visitDebuggerStatement(node);
            case Syntax.EmptyStatement:
                return this.visitEmptyStatement(node);
            case Syntax.ExportAllDeclaration:
                return this.visitExportAllDeclaration(node);
            case Syntax.ExportDefaultDeclaration:
                return this.visitExportDefaultDeclaration(node);
            case Syntax.ExportNamedDeclaration:
                return this.visitExportNamedDeclaration(node);
            case Syntax.ExportSpecifier:
                return this.visitExportSpecifier(node);
            case Syntax.ExpressionStatement:
                return this.visitExpressionStatement(node);
            case Syntax.ForStatement:
                return this.visitForStatement(node);
            case Syntax.ForOfStatement:
                return this.visitForOfStatement(node);
            case Syntax.ForInStatement:
                return this.visitForInStatement(node);
            case Syntax.FunctionDeclaration:
                return this.visitFunctionDeclaration(node);
            case Syntax.FunctionExpression:
                return this.visitFunctionExpression(node);
            case Syntax.Identifier:
                return this.visitIdentifier(node);
            case Syntax.IfStatement:
                return this.visitIfStatement(node);
            case Syntax.ImportAttribute:
                return this.visitImportAttribute(node);
            case Syntax.ImportExpression:
                return this.visitImportExpression(node);
            case Syntax.ImportDeclaration:
                return this.visitImportDeclaration(node);
            case Syntax.ImportDefaultSpecifier:
                return this.visitImportDefaultSpecifier(node);
            case Syntax.ImportNamespaceSpecifier:
                return this.visitImportNamespaceSpecifier(node);
            case Syntax.ImportSpecifier:
                return this.visitImportSpecifier(node);
            case Syntax.Literal:
                return this.visitLiteral(node);
            case Syntax.LabeledStatement:
                return this.visitLabeledStatement(node);
            case Syntax.LogicalExpression:
                return this.visitLogicalExpression(node);
            case Syntax.MemberExpression:
                return this.visitMemberExpression(node);
            case Syntax.MetaProperty:
                return this.visitMetaProperty(node);
            case Syntax.MethodDefinition:
                return this.visitMethodDefinition(node);
            case Syntax.NewExpression:
                return this.visitNewExpression(node);
            case Syntax.ObjectExpression:
                return this.visitObjectExpression(node);
            case Syntax.ObjectPattern:
                return this.visitObjectPattern(node);
            case Syntax.Program:
                return this.visitProgram(node);
            case Syntax.Property:
                return this.visitProperty(node);
            case Syntax.PrivateIdentifier:
                return this.visitPrivateIdentifier(node);
            case Syntax.RestElement:
                return this.visitRestElement(node);
            case Syntax.ReturnStatement:
                return this.visitReturnStatement(node);
            case Syntax.SequenceExpression:
                return this.visitSequenceExpression(node);
            case Syntax.SpreadElement:
                return this.visitSpreadElement(node);
            case Syntax.StaticBlock:
                return this.visitStaticBlock(node);
            case Syntax.Super:
                return this.visitSuper(node);
            case Syntax.SwitchCase:
                return this.visitSwitchCase(node);
            case Syntax.SwitchStatement:
                return this.visitSwitchStatement(node);
            case Syntax.TaggedTemplateExpression:
                return this.visitTaggedTemplateExpression(node);
            case Syntax.TemplateElement:
                return this.visitTemplateElement(node);
            case Syntax.TemplateLiteral:
                return this.visitTemplateLiteral(node);
            case Syntax.ThisExpression:
                return this.visitThisExpression(node);
            case Syntax.ThrowStatement:
                return this.visitThrowStatement(node);
            case Syntax.TryStatement:
                return this.visitTryStatement(node);
            case Syntax.UnaryExpression:
                return this.visitUnaryExpression(node);
            case Syntax.UpdateExpression:
                return this.visitUpdateExpression(node);
            case Syntax.VariableDeclaration:
                return this.visitVariableDeclaration(node);
            case Syntax.VariableDeclarator:
                return this.visitVariableDeclarator(node);
            case Syntax.WhileStatement:
                return this.visitWhileStatement(node);
            case Syntax.WithStatement:
                return this.visitWithStatement(node);
            case Syntax.YieldExpression:
                return this.visitYieldExpression(node);
        }
    }

    visitNodeList<T extends nodes.Node>(original: (T[] | null)): T[] {
        if (original == null)
            return <T[]><unknown>original;

        let list: nodes.Node[] | null = null;
        for (let i = 0, n = original.length; i < n; i++) {
            let p = this.visit(original[i]);
            if (list != null) {
                list.push(p);
            }
            else if (p != original[i]) {
                list = [];
                for (let j = 0; j < i; j++) {
                    list.push(original[j]);
                }
                list.push(p);
            }
        }
        if (list != null)
            return <T[]>list;
        return <T[]>original;
    }

    visitAssignmentExpression(node: nodes.AssignmentExpression) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        if (left !== node.left || right !== node.right)
            return new nodes.AssignmentExpression(node.operator, left, right);
        return node;
    }

    visitAssignmentPattern(node: nodes.AssignmentPattern) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        if (left !== node.left || right !== node.right)
            return new nodes.AssignmentPattern(left, right);
        return node;
    }

    visitArrayExpression(node: nodes.ArrayExpression) {
        const elements = this.visitNodeList(node.elements);
        if (elements !== node.elements)
            return new nodes.ArrayExpression(elements);
        return node;
    }

    visitArrayPattern(node: nodes.ArrayPattern) {
        const elements = this.visitNodeList(node.elements);
        if (elements !== node.elements)
            return new nodes.ArrayPattern(elements);
        return node;
    }

    visitArrowFunctionExpression(node: nodes.ArrowFunctionExpression) {
        const id = this.visit(node.id);
        const params = this.visitNodeList(node.params);
        const body = this.visit(node.body);
        if (id !== node.id || params !== node.params || body !== node.body) {
            const ret = new nodes.ArrowFunctionExpression(params, body, node.expression, node.async);
            ret.id = id;
            return ret;
        }
        return node;
    }

    visitAwaitExpression(node: nodes.AwaitExpression) {
        const argument = this.visit(node.argument);
        if (argument !== node.argument)
            return new nodes.AwaitExpression(argument);
        return node;
    }

    visitBlockStatement(node: nodes.BlockStatement) {
        const body = this.visitNodeList(node.body);
        if (body !== node.body)
            return new nodes.BlockStatement(body);
        return node;
    }

    visitBinaryExpression(node: nodes.BinaryExpression) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        if (left !== node.left || right !== node.right)
            return new nodes.BinaryExpression(node.operator, left, right);
        return node;
    }

    visitBreakStatement(node: nodes.BreakStatement) {
        const label = this.visit(node.label);
        if (label !== node.label)
            return new nodes.BreakStatement(label);
        return node;
    }

    visitCallExpression(node: nodes.CallExpression) {
        const callee = this.visit(node.callee);
        const args = this.visitNodeList(node.arguments);
        if (callee !== node.callee || args !== node.arguments)
            return new nodes.CallExpression(callee, args, node.optional);
        return node;
    }

    visitCatchClause(node: nodes.CatchClause) {
        const param = this.visit(node.param);
        const body = this.visit(node.body);
        if (param !== node.param || body !== node.body)
            return new nodes.CatchClause(param, body);
        return node;
    }

    visitChainExpression(node: nodes.ChainExpression) {
        const expression = this.visit(node.expression);
        if (expression !== node.expression)
            return new nodes.ChainExpression(expression);
        return node;
    }

    visitClassBody(node: nodes.ClassBody) {
        const body = this.visitNodeList(node.body);
        if (body !== node.body)
            return new nodes.ClassBody(body);
        return node;
    }

    visitClassDeclaration(node: nodes.ClassDeclaration) {
        const id = this.visit(node.id);
        const superClass = this.visit(node.superClass);
        const body = this.visit(node.body);
        const decorators = this.visitNodeList(node.decorators);
        if (id !== node.id || superClass !== node.superClass || body !== node.body || decorators !== node.decorators)
            return new nodes.ClassDeclaration(id, superClass, body, decorators);
        return node;
    }

    visitClassExpression(node: nodes.ClassExpression) {
        const id = this.visit(node.id);
        const superClass = this.visit(node.superClass);
        const body = this.visit(node.body);
        const decorators = this.visitNodeList(node.decorators);
        if (id !== node.id || superClass !== node.superClass || body !== node.body || decorators !== node.decorators)
            return new nodes.ClassExpression(id, superClass, body, decorators);
        return node;
    }

    visitConditionalExpression(node: nodes.ConditionalExpression) {
        const test = this.visit(node.test);
        const consequent = this.visit(node.consequent);
        const alternate = this.visit(node.alternate);
        if (test !== node.test || consequent !== node.consequent || alternate !== node.alternate)
            return new nodes.ConditionalExpression(test, consequent, alternate);
        return node;
    }

    visitContinueStatement(node: nodes.ContinueStatement) {
        const label = this.visit(node.label);
        if (label !== node.label)
            return new nodes.ContinueStatement(label);
        return node;
    }

    visitDecorator(node: nodes.Decorator) {
        const expression = this.visit(node.expression);
        if (expression !== node.expression)
            return new nodes.Decorator(expression);
        return node;
    }

    visitDoWhileStatement(node: nodes.DoWhileStatement) {
        const body = this.visit(node.body);
        const test = this.visit(node.test);
        if (body !== node.body || test !== node.test)
            return new nodes.DoWhileStatement(body, test);
        return node;
    }

    visitDebuggerStatement(node: nodes.DebuggerStatement) {
        return node;
    }

    visitEmptyStatement(node: nodes.EmptyStatement) {
        return node;
    }

    visitExportAllDeclaration(node: nodes.ExportAllDeclaration) {
        const source = this.visit(node.source);
        const exported = this.visit(node.exported);
        const assertions = this.visitNodeList(node.assertions);
        if (source !== node.source || exported !== node.exported || assertions !== node.assertions)
            return new nodes.ExportAllDeclaration(source, exported, assertions);
        return node;
    }

    visitExportDefaultDeclaration(node: nodes.ExportDefaultDeclaration) {
        const declaration = this.visit(node.declaration);
        if (declaration !== node.declaration)
            return new nodes.ExportDefaultDeclaration(declaration);
        return node;
    }

    visitExportNamedDeclaration(node: nodes.ExportNamedDeclaration) {
        const declaration = this.visit(node.declaration);
        const specifiers = this.visitNodeList(node.specifiers);
        const source = this.visit(node.source);
        const assertions = this.visitNodeList(node.assertions);
        if (declaration !== node.declaration || specifiers !== node.specifiers || source !== node.source || assertions !== node.assertions)
            return new nodes.ExportNamedDeclaration(declaration, specifiers, source, assertions);
        return node;
    }

    visitExportSpecifier(node: nodes.ExportSpecifier) {
        const exported = this.visit(node.exported);
        const local = this.visit(node.local);
        if (exported !== node.exported || local !== node.local)
            return new nodes.ExportSpecifier(exported, local);
        return node;
    }

    visitExpressionStatement(node: nodes.ExpressionStatement) {
        const expression = this.visit(node.expression);
        if (expression !== node.expression)
            return new nodes.ExpressionStatement(expression);
        return node;
    }

    visitForStatement(node: nodes.ForStatement) {
        const init = this.visit(node.init);
        const test = this.visit(node.test);
        const update = this.visit(node.update);
        const body = this.visit(node.body);
        if (init !== node.init || test !== node.test || update !== node.update || body !== node.body)
            return new nodes.ForStatement(init, test, update, body);
        return node;
    }

    visitForOfStatement(node: nodes.ForOfStatement) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        const body = this.visit(node.body);
        if (left !== node.left || right !== node.right || body !== node.body)
            return new nodes.ForOfStatement(left, right, body, node.await);
        return node;
    }

    visitForInStatement(node: nodes.ForInStatement) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        const body = this.visit(node.body);
        if (left !== node.left || right !== node.right || body !== node.body)
            return new nodes.ForInStatement(left, right, body);
        return node;
    }

    visitFunctionDeclaration(node: nodes.FunctionDeclaration) {
        const id = this.visit(node.id);
        const params = this.visitNodeList(node.params);
        const body = this.visit(node.body);
        if (id !== node.id || params !== node.params || body !== node.body)
            return new nodes.FunctionDeclaration(id, params, body, node.generator);
        return node;
    }

    visitFunctionExpression(node: nodes.FunctionExpression) {
        const id = this.visit(node.id);
        const params = this.visitNodeList(node.params);
        const body = this.visit(node.body);
        if (id !== node.id || params !== node.params || body !== node.body)
            return new nodes.FunctionExpression(id, params, body, node.generator, node.async);
        return node;
    }

    visitIdentifier(node: nodes.Identifier) {
        return node;
    }

    visitIfStatement(node: nodes.IfStatement) {
        const test = this.visit(node.test);
        const consequent = this.visit(node.consequent);
        const alternate = this.visit(node.alternate);
        if (test !== node.test || consequent !== node.consequent || alternate !== node.alternate)
            return new nodes.IfStatement(test, consequent, alternate);
        return node;
    }

    visitImportAttribute(node: nodes.ImportAttribute) {
        const key = this.visit(node.key);
        const value = this.visit(node.value);
        if (key !== node.key || value !== node.value)
            return new nodes.ImportAttribute(key, value);
        return node;
    }

    visitImportExpression(node: nodes.ImportExpression) {
        const source = this.visit(node.source);
        const attributes = this.visit(node.attributes);
        if (source !== node.source || attributes !== node.attributes)
            return new nodes.ImportExpression(source, attributes);
        return node;
    }

    visitImportDeclaration(node: nodes.ImportDeclaration) {
        const specifiers = this.visitNodeList(node.specifiers);
        const source = this.visit(node.source);
        const assertions = this.visitNodeList(node.assertions);
        if (specifiers !== node.specifiers || source !== node.source || assertions !== node.assertions)
            return new nodes.ImportDeclaration(specifiers, source, assertions);
        return node;
    }

    visitImportDefaultSpecifier(node: nodes.ImportDefaultSpecifier) {
        const local = this.visit(node.local);
        if (local !== node.local)
            return new nodes.ImportDefaultSpecifier(local);
        return node;
    }

    visitImportNamespaceSpecifier(node: nodes.ImportNamespaceSpecifier) {
        const local = this.visit(node.local);
        if (local !== node.local)
            return new nodes.ImportNamespaceSpecifier(local);
        return node;
    }

    visitImportSpecifier(node: nodes.ImportSpecifier) {
        const local = this.visit(node.local);
        const imported = this.visit(node.imported);
        if (local !== node.local || imported !== node.imported)
            return new nodes.ImportSpecifier(local, imported);
        return node;
    }

    visitLiteral(node: nodes.Literal | nodes.RegexLiteral) {
        return node;
    }

    visitLabeledStatement(node: nodes.LabeledStatement) {
        const label = this.visit(node.label);
        const body = this.visit(node.body);
        if (label !== node.label || body !== node.body)
            return new nodes.LabeledStatement(label, body);
        return node;
    }

    visitLogicalExpression(node: nodes.LogicalExpression) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        if (left !== node.left || right !== node.right)
            return new nodes.LogicalExpression(node.operator, left, right);
        return node;
    }

    visitMemberExpression(node: nodes.MemberExpression) {
        const _object = this.visit(node.object);
        const property = this.visit(node.property);
        if (_object !== node.object || property !== node.property)
            return new nodes.MemberExpression(node.computed, _object, property, node.optional);
        return node;
    }

    visitMetaProperty(node: nodes.MetaProperty) {
        const meta = this.visit(node.meta);
        const property = this.visit(node.property);
        if (meta !== node.meta || property !== node.property)
            return new nodes.MetaProperty(meta, property);
        return node;
    }

    visitMethodDefinition(node: nodes.MethodDefinition) {
        const key = this.visit(node.key);
        const value = this.visit(node.value);
        const decorators = this.visitNodeList(node.decorators);
        if (key !== node.key || value !== node.value || decorators !== node.decorators)
            return new nodes.MethodDefinition(key, node.computed, value, node.kind, node.static, decorators);
        return node;
    }

    visitNewExpression(node: nodes.NewExpression) {
        const callee = this.visit(node.callee);
        const args = this.visitNodeList(node.arguments);
        if (callee !== node.callee || args !== node.arguments)
            return new nodes.NewExpression(callee, args);
        return node;
    }

    visitObjectExpression(node: nodes.ObjectExpression) {
        const properties = this.visitNodeList(node.properties);
        if (properties !== node.properties)
            return new nodes.ObjectExpression(properties);
        return node;
    }

    visitObjectPattern(node: nodes.ObjectPattern) {
        const properties = this.visitNodeList(node.properties);
        if (properties !== node.properties)
            return new nodes.ObjectPattern(properties);
        return node;
    }

    visitProgram(node: nodes.Program) {
        const body = this.visitNodeList(node.body);
        if (body !== node.body)
            return new nodes.Program(node.sourceType, body);
        return node;
    }

    visitProperty(node: nodes.Property | nodes.PropertyDefinition) {
        const key = this.visit(node.key);
        const value = this.visit(node.value);
        const decorators = this.visitNodeList((<nodes.PropertyDefinition>node).decorators);
        if (key !== node.key || value !== node.value || decorators !== decorators) {
            if ('kind' in node)
                return new nodes.Property(node.kind, key, node.computed, value, node.method, node.shorthand);
            else
                return new nodes.PropertyDefinition(key, node.computed, value, node.static, decorators);
        }
        return node;
    }

    visitPrivateIdentifier(node: nodes.PrivateIdentifier) {
        return node;
    }

    visitRestElement(node: nodes.RestElement) {
        const argument = this.visit(node.argument);
        if (argument !== node.argument)
            return new nodes.RestElement(argument);
        return node;
    }

    visitReturnStatement(node: nodes.ReturnStatement) {
        const argument = this.visit(node.argument);
        if (argument !== node.argument)
            return new nodes.ReturnStatement(argument);
        return node;
    }

    visitSequenceExpression(node: nodes.SequenceExpression) {
        const expressions = this.visitNodeList(node.expressions);
        if (expressions !== node.expressions)
            return new nodes.SequenceExpression(expressions);
        return node;
    }

    visitSpreadElement(node: nodes.SpreadElement) {
        const argument = this.visit(node.argument);
        if (argument !== node.argument)
            return new nodes.SpreadElement(argument);
        return node;
    }

    visitStaticBlock(node: nodes.StaticBlock) {
        const body = this.visitNodeList(node.body);
        if (body !== node.body)
            return new nodes.StaticBlock(body);
        return node;
    }

    visitSuper(node: nodes.Super) {
        return node;
    }

    visitSwitchCase(node: nodes.SwitchCase) {
        const test = this.visit(node.test);
        const consequent = this.visitNodeList(node.consequent);
        if (test !== node.test || consequent !== node.consequent)
            return new nodes.SwitchCase(test, consequent);
        return node;
    }

    visitSwitchStatement(node: nodes.SwitchStatement) {
        const discriminant = this.visit(node.discriminant);
        const cases = this.visitNodeList(node.cases);
        if (discriminant !== node.discriminant || cases !== node.cases)
            return new nodes.SwitchStatement(discriminant, cases);
        return node;
    }

    visitTaggedTemplateExpression(node: nodes.TaggedTemplateExpression) {
        const tag = this.visit(node.tag);
        const quasi = this.visit(node.quasi);
        if (tag !== node.tag || quasi !== node.quasi)
            return new nodes.TaggedTemplateExpression(tag, quasi);
        return node;
    }

    visitTemplateElement(node: nodes.TemplateElement) {
        return node;
    }

    visitTemplateLiteral(node: nodes.TemplateLiteral) {
        const quasis = this.visitNodeList(node.quasis);
        const expressions = this.visitNodeList(node.expressions);
        if (quasis !== node.quasis || expressions !== node.expressions)
            return new nodes.TemplateLiteral(quasis, expressions);
        return node;
    }

    visitThisExpression(node: nodes.ThisExpression) {
        return node;
    }

    visitThrowStatement(node: nodes.ThrowStatement) {
        const argument = this.visit(node.argument);
        if (argument !== node.argument)
            return new nodes.ThrowStatement(argument);
        return node;
    }

    visitTryStatement(node: nodes.TryStatement) {
        const block = this.visit(node.block);
        const handler = this.visit(node.handler);
        const finalizer = this.visit(node.finalizer);
        if (block !== node.block || handler !== node.handler || finalizer !== node.finalizer)
            return new nodes.TryStatement(block, handler, finalizer);
        return node;
    }

    visitUnaryExpression(node: nodes.UnaryExpression) {
        const argument = this.visit(node.argument);
        if (argument !== node.argument)
            return new nodes.UnaryExpression(node.operator, argument);
        return node;
    }

    visitUpdateExpression(node: nodes.UpdateExpression) {
        const argument = this.visit(node.argument);
        if (argument !== node.argument)
            return new nodes.UpdateExpression(node.operator, argument, node.prefix);
        return node;
    }

    visitVariableDeclaration(node: nodes.VariableDeclaration) {
        const declarations = this.visitNodeList(node.declarations);
        if (declarations !== node.declarations)
            return new nodes.VariableDeclaration(declarations, node.kind);
        return node;
    }

    visitVariableDeclarator(node: nodes.VariableDeclarator) {
        const id = this.visit(node.id);
        const init = this.visit(node.init);
        if (id !== node.id || init !== node.init)
            return new nodes.VariableDeclarator(id, init);
        return node;
    }

    visitWhileStatement(node: nodes.WhileStatement) {
        const test = this.visit(node.test);
        const body = this.visit(node.body);
        if (test !== node.test || body !== node.body)
            return new nodes.WhileStatement(test, body);
        return node;
    }

    visitWithStatement(node: nodes.WithStatement) {
        const _object = this.visit(node.object);
        const body = this.visit(node.body);
        if (_object !== node.object || body !== node.body)
            return new nodes.WithStatement(_object, body);
        return node;
    }

    visitYieldExpression(node: nodes.YieldExpression) {
        const argument = this.visit(node.argument);
        if (argument !== node.argument)
            return new nodes.YieldExpression(argument, node.delegate);
        return node;
    }
}