import { Syntax } from './syntax';

export type ArgumentListElement = Expression | SpreadElement;
export type ArrayExpressionElement = Expression | SpreadElement | null;
export type ArrayPatternElement = AssignmentPattern | BindingIdentifier | BindingPattern | RestElement | null;
export type BindingPattern = ArrayPattern | ObjectPattern;
export type BindingIdentifier = Identifier
export type ChainElement = CallExpression | MemberExpression | MemberExpression;
export type Class = ClassDeclaration | ClassExpression;
export type Declaration = FunctionDeclaration | VariableDeclaration | ClassDeclaration | ImportDeclaration | ExportDeclaration;
export type ExportableDefaultDeclaration = BindingIdentifier | BindingPattern | ClassDeclaration | Expression | FunctionDeclaration;
export type ExportableNamedDeclaration = AsyncFunctionDeclaration | ClassDeclaration | FunctionDeclaration | VariableDeclaration;
export type ExportDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration;
export type Expression = ArrayExpression | ArrowFunctionExpression | AssignmentExpression |
    AwaitExpression | BinaryExpression | CallExpression | ChainExpression | ClassExpression | MemberExpression |
    ConditionalExpression | Identifier | FunctionExpression | Literal | LogicalExpression | NewExpression | ObjectExpression |
    RegexLiteral | SequenceExpression | MemberExpression | TemplateLiteral | TaggedTemplateExpression |
    ThisExpression | UnaryExpression | UpdateExpression | YieldExpression | MetaProperty | ImportExpression;
export type FunctionParameter = AssignmentPattern | BindingIdentifier | BindingPattern;
export type Function = FunctionDeclaration | FunctionExpression | ArrowFunctionExpression;
export type ImportDeclarationSpecifier = ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier;
export type ObjectExpressionProperty = Property | SpreadElement;
export type ObjectPatternProperty = Property | RestElement;
export type Statement = BlockStatement | BreakStatement | LabeledStatement | ContinueStatement | DebuggerStatement | DoWhileStatement |
    EmptyStatement | ExpressionStatement | Directive | ForStatement | ForInStatement | ForOfStatement |
    IfStatement | ReturnStatement | SwitchStatement | ThrowStatement |
    TryStatement | VariableDeclaration | WhileStatement | WithStatement | Declaration;
export type Pattern = Expression | ObjectPattern | ArrayPattern | Identifier | AssignmentPattern | RestElement;
export type PropertyKey = Identifier | Literal | PrivateIdentifier;
export type PropertyValue = AssignmentPattern | BindingIdentifier | BindingPattern | FunctionExpression;

export type Node = Program | Function | Statement | VariableDeclarator | Expression | Property | PropertyKey | Pattern | SwitchCase | CatchClause | MethodDefinition |
    Class | ClassBody | ImportDeclaration | ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ExportNamedDeclaration | ExportSpecifier |
    ExportDefaultDeclaration | ExportAllDeclaration | TemplateElement | Super | ArgumentListElement;

export class ArrayExpression {
    readonly type: Syntax.ArrayExpression;
    readonly elements: ArrayExpressionElement[];
    constructor(elements: ArrayExpressionElement[]) {
        this.type = Syntax.ArrayExpression;
        this.elements = elements;
    }
}

export class ArrayPattern {
    readonly type: Syntax.ArrayPattern;
    readonly elements: ArrayPatternElement[];
    constructor(elements: ArrayPatternElement[]) {
        this.type = Syntax.ArrayPattern;
        this.elements = elements;
    }
}

export class ArrowFunctionExpression {
    readonly type: Syntax.ArrowFunctionExpression;
    readonly id: Identifier | null;
    readonly params: FunctionParameter[];
    readonly body: BlockStatement | Expression;
    readonly generator: boolean;
    readonly expression: boolean;
    readonly async: boolean;
    constructor(params: FunctionParameter[], body: BlockStatement | Expression, expression: boolean, isAsync: boolean) {
        this.type = Syntax.ArrowFunctionExpression;
        this.id = null;
        this.params = params;
        this.body = body;
        this.generator = false;
        this.expression = expression;
        this.async = isAsync;
    }
}

export class AssignmentExpression {
    readonly type: Syntax.AssignmentExpression;
    readonly operator: string;
    readonly left: Expression;
    readonly right: Expression;
    constructor(operator: string, left: Expression, right: Expression) {
        this.type = Syntax.AssignmentExpression;
        this.operator = operator;
        this.left = left;
        this.right = right;
    }
}

export class AssignmentPattern {
    readonly type: Syntax.AssignmentPattern;
    readonly left: BindingIdentifier | BindingPattern;
    readonly right: Expression;
    constructor(left: BindingIdentifier | BindingPattern, right: Expression) {
        this.type = Syntax.AssignmentPattern;
        this.left = left;
        this.right = right;
    }
}

export class AsyncFunctionDeclaration {
    readonly type: Syntax.FunctionDeclaration;
    readonly id: Identifier | null;
    readonly params: FunctionParameter[];
    readonly body: BlockStatement;
    readonly generator: boolean;
    readonly expression: boolean;
    readonly async: boolean;
    constructor(id: Identifier | null, params: FunctionParameter[], body: BlockStatement, generator: boolean) {
        this.type = Syntax.FunctionDeclaration;
        this.id = id;
        this.params = params;
        this.body = body;
        this.generator = generator;
        this.expression = false;
        this.async = true;
    }
}

export class AwaitExpression {
    readonly type: Syntax.AwaitExpression;
    readonly argument: Expression;
    constructor(argument: Expression) {
        this.type = Syntax.AwaitExpression;
        this.argument = argument;
    }
}

export class BigIntLiteral {
    readonly type: Syntax.Literal;
    readonly value: null | bigint;
    readonly raw: string;
    readonly bigint: string;
    constructor(value: null | bigint, raw: string, bigint: string) {
        this.type = Syntax.Literal;
        this.value = value;
        this.raw = raw;
        this.bigint = bigint;
    }
}

export class BinaryExpression {
    readonly type: Syntax.BinaryExpression;
    readonly operator: string;
    readonly left: Expression | PrivateIdentifier;
    readonly right: Expression;
    constructor(operator: string, left: Expression | PrivateIdentifier, right: Expression) {
        this.type = Syntax.BinaryExpression;
        this.operator = operator;
        this.left = left;
        this.right = right;
    }
}

export class BlockStatement {
    readonly type: Syntax.BlockStatement;
    readonly body: Statement[];
    constructor(body) {
        this.type = Syntax.BlockStatement;
        this.body = body;
    }
}

export class BreakStatement {
    readonly type: Syntax.BreakStatement;
    readonly label: Identifier | null;
    constructor(label: Identifier | null) {
        this.type = Syntax.BreakStatement;
        this.label = label;
    }
}

export class CallExpression {
    readonly type: Syntax.CallExpression;
    readonly callee: Expression | ImportExpression;
    readonly arguments: ArgumentListElement[];
    readonly optional: boolean;
    constructor(callee: Expression | ImportExpression, args: ArgumentListElement[], optional: boolean) {
        this.type = Syntax.CallExpression;
        this.callee = callee;
        this.arguments = args;
        this.optional = optional;
    }
}

export class CatchClause {
    readonly type: Syntax.CatchClause;
    readonly param: BindingIdentifier | BindingPattern | null;
    readonly body: BlockStatement;
    constructor(param: BindingIdentifier | BindingPattern | null, body: BlockStatement) {
        this.type = Syntax.CatchClause;
        this.param = param;
        this.body = body;
    }
}

export class ChainExpression {
    readonly type: Syntax.ChainExpression;
    readonly expression: ChainElement;
    constructor(expression: ChainElement) {
        this.type = Syntax.ChainExpression;
        this.expression = expression;
    }
}

export class ClassBody {
    readonly type: Syntax.ClassBody;
    readonly body: (MethodDefinition | PropertyDefinition | StaticBlock)[];
    constructor(body: (MethodDefinition | PropertyDefinition | StaticBlock)[]) {
        this.type = Syntax.ClassBody;
        this.body = body;
    }
}

export class ClassDeclaration {
    readonly type: Syntax.ClassDeclaration;
    readonly id: Identifier | null;
    readonly superClass: Identifier | null;
    readonly body: ClassBody;
    constructor(id: Identifier | null, superClass: Identifier | null, body: ClassBody) {
        this.type = Syntax.ClassDeclaration;
        this.id = id;
        this.superClass = superClass;
        this.body = body;
    }
}

export class ClassExpression {
    readonly type: Syntax.ClassExpression;
    readonly id: Identifier | null;
    readonly superClass: Identifier | null;
    readonly body: ClassBody;
    constructor(id: Identifier | null, superClass: Identifier | null, body: ClassBody) {
        this.type = Syntax.ClassExpression;
        this.id = id;
        this.superClass = superClass;
        this.body = body;
    }
}

export class ConditionalExpression {
    readonly type: Syntax.ConditionalExpression;
    readonly test: Expression;
    readonly consequent: Expression;
    readonly alternate: Expression;
    constructor(test: Expression, consequent: Expression, alternate: Expression) {
        this.type = Syntax.ConditionalExpression;
        this.test = test;
        this.consequent = consequent;
        this.alternate = alternate;
    }
}

export class ContinueStatement {
    readonly type: Syntax.ContinueStatement;
    readonly label: Identifier | null;
    constructor(label: Identifier | null) {
        this.type = Syntax.ContinueStatement;
        this.label = label;
    }
}

export class DebuggerStatement {
    readonly type: Syntax.DebuggerStatement;
    constructor() {
        this.type = Syntax.DebuggerStatement;
    }
}

export class Directive {
    readonly type: Syntax.ExpressionStatement;
    readonly expression: Expression;
    readonly directive: string;
    constructor(expression: Expression, directive: string) {
        this.type = Syntax.ExpressionStatement;
        this.expression = expression;
        this.directive = directive;
    }
}

export class DoWhileStatement {
    readonly type: Syntax.DoWhileStatement;
    readonly body: Statement;
    readonly test: Expression;
    constructor(body: Statement, test: Expression) {
        this.type = Syntax.DoWhileStatement;
        this.body = body;
        this.test = test;
    }
}

export class EmptyStatement {
    readonly type: Syntax.EmptyStatement;
    constructor() {
        this.type = Syntax.EmptyStatement;
    }
}

export class ExportAllDeclaration {
    readonly type: Syntax.ExportAllDeclaration;
    readonly source: Literal;
    readonly exported: Identifier | null;
    constructor(source: Literal, exported: Identifier | null) {
        this.type = Syntax.ExportAllDeclaration;
        this.source = source;
        this.exported = exported;
    }
}

export class ExportDefaultDeclaration {
    readonly type: Syntax.ExportDefaultDeclaration;
    readonly declaration: ExportableDefaultDeclaration;
    constructor(declaration: ExportableDefaultDeclaration) {
        this.type = Syntax.ExportDefaultDeclaration;
        this.declaration = declaration;
    }
}

export class ExportNamedDeclaration {
    readonly type: Syntax.ExportNamedDeclaration;
    readonly declaration: ExportableNamedDeclaration | null;
    readonly specifiers: ExportSpecifier[];
    readonly source: Literal | null;
    constructor(declaration: ExportableNamedDeclaration | null, specifiers: ExportSpecifier[], source: Literal | null) {
        this.type = Syntax.ExportNamedDeclaration;
        this.declaration = declaration;
        this.specifiers = specifiers;
        this.source = source;
    }
}

export class ExportSpecifier {
    readonly type: Syntax.ExportSpecifier;
    readonly exported: Identifier;
    readonly local: Identifier;
    constructor(local: Identifier, exported: Identifier) {
        this.type = Syntax.ExportSpecifier;
        this.exported = exported;
        this.local = local;
    }
}

export class ExpressionStatement {
    readonly type: Syntax.ExpressionStatement;
    readonly expression: Expression;
    constructor(expression: Expression) {
        this.type = Syntax.ExpressionStatement;
        this.expression = expression;
    }
}

export class ForInStatement {
    readonly type: Syntax.ForInStatement;
    readonly left: Expression;
    readonly right: Expression;
    readonly body: Statement;
    readonly each: boolean;
    constructor(left: Expression, right: Expression, body: Statement) {
        this.type = Syntax.ForInStatement;
        this.left = left;
        this.right = right;
        this.body = body;
        this.each = false;
    }
}

export class ForOfStatement {
    readonly type: Syntax.ForOfStatement;
    readonly await: boolean;
    readonly left: Expression;
    readonly right: Expression;
    readonly body: Statement;
    constructor(left: Expression, right: Expression, body: Statement, _await: boolean) {
        this.type = Syntax.ForOfStatement;
        this.await = _await;
        this.left = left;
        this.right = right;
        this.body = body;
    }
}

export class ForStatement {
    readonly type: Syntax.ForStatement;
    readonly init: Expression | null;
    readonly test: Expression | null;
    readonly update: Expression | null;
    body: Statement;
    constructor(init: Expression | null, test: Expression | null, update: Expression | null, body: Statement) {
        this.type = Syntax.ForStatement;
        this.init = init;
        this.test = test;
        this.update = update;
        this.body = body;
    }
}

export class FunctionDeclaration {
    readonly type: Syntax.FunctionDeclaration;
    readonly id: Identifier | null;
    readonly params: FunctionParameter[];
    readonly body: BlockStatement;
    readonly generator: boolean;
    readonly expression: boolean;
    readonly async: boolean;
    constructor(id: Identifier | null, params: FunctionParameter[], body: BlockStatement, generator: boolean) {
        this.type = Syntax.FunctionDeclaration;
        this.id = id;
        this.params = params;
        this.body = body;
        this.generator = generator;
        this.expression = false;
        this.async = false;
    }
}

export class FunctionExpression {
    readonly type: Syntax.FunctionExpression;
    readonly id: Identifier | null;
    readonly params: FunctionParameter[];
    readonly body: BlockStatement;
    readonly generator: boolean;
    readonly expression: boolean;
    readonly async: boolean;
    constructor(id: Identifier | null, params: FunctionParameter[], body: BlockStatement, generator: boolean, isAsync: boolean) {
        this.type = Syntax.FunctionExpression;
        this.id = id;
        this.params = params;
        this.body = body;
        this.generator = generator;
        this.expression = false;
        this.async = isAsync;
    }
}

export class Identifier {
    readonly type: Syntax.Identifier;
    readonly name: string;
    constructor(name) {
        this.type = Syntax.Identifier;
        this.name = name;
    }
}

export class IfStatement {
    readonly type: Syntax.IfStatement;
    readonly test: Expression;
    readonly consequent: Statement;
    readonly alternate: Statement | null;
    constructor(test: Expression, consequent: Statement, alternate: Statement | null) {
        this.type = Syntax.IfStatement;
        this.test = test;
        this.consequent = consequent;
        this.alternate = alternate;
    }
}

export class ImportExpression {
    readonly type: Syntax.ImportExpression;
    readonly source: Expression;
    constructor(source) {
        this.type = Syntax.ImportExpression;
        this.source = source;
    }
}

export class ImportDeclaration {
    readonly type: Syntax.ImportDeclaration;
    readonly specifiers: ImportDeclarationSpecifier[];
    readonly source: Literal;
    constructor(specifiers, source) {
        this.type = Syntax.ImportDeclaration;
        this.specifiers = specifiers;
        this.source = source;
    }
}

export class ImportDefaultSpecifier {
    readonly type: Syntax.ImportDefaultSpecifier;
    readonly local: Identifier;
    constructor(local: Identifier) {
        this.type = Syntax.ImportDefaultSpecifier;
        this.local = local;
    }
}

export class ImportNamespaceSpecifier {
    readonly type: Syntax.ImportNamespaceSpecifier;
    readonly local: Identifier;
    constructor(local: Identifier) {
        this.type = Syntax.ImportNamespaceSpecifier;
        this.local = local;
    }
}

export class ImportSpecifier {
    readonly type: Syntax.ImportSpecifier;
    readonly local: Identifier;
    readonly imported: Identifier;
    constructor(local: Identifier, imported: Identifier) {
        this.type = Syntax.ImportSpecifier;
        this.local = local;
        this.imported = imported;
    }
}

export class LabeledStatement {
    readonly type: Syntax.LabeledStatement;
    readonly label: Identifier;
    readonly body: Statement;
    constructor(label: Identifier, body: Statement) {
        this.type = Syntax.LabeledStatement;
        this.label = label;
        this.body = body;
    }
}

export class Literal {
    readonly type: Syntax.Literal;
    readonly value: boolean | number | string | null;
    readonly raw: string;
    constructor(value: boolean | number | string | null, raw: string) {
        this.type = Syntax.Literal;
        this.value = value;
        this.raw = raw;
    }
}

export class LogicalExpression {
    readonly type: Syntax.LogicalExpression;
    readonly operator: string;
    readonly left: Expression;
    readonly right: Expression;
    constructor(operator: string, left: Expression, right: Expression) {
        this.type = Syntax.LogicalExpression;
        this.operator = operator;
        this.left = left;
        this.right = right;
    }
}

export class MemberExpression {
    readonly type: Syntax.MemberExpression;
    readonly computed: boolean;
    readonly object: Expression;
    readonly property: Expression | PrivateIdentifier;
    readonly optional: boolean;
    constructor(computed: boolean, object: Expression, property: Expression, optional: boolean) {
        this.type = Syntax.MemberExpression;
        this.computed = computed;
        this.object = object;
        this.property = property;
        this.optional = optional;
    }
}

export class MetaProperty {
    readonly type: Syntax.MetaProperty;
    readonly meta: Identifier;
    readonly property: Identifier;
    constructor(meta: Identifier, property: Identifier) {
        this.type = Syntax.MetaProperty;
        this.meta = meta;
        this.property = property;
    }
}

export class MethodDefinition {
    readonly type: Syntax.MethodDefinition;
    readonly key: Expression | PrivateIdentifier | null;
    readonly computed: boolean;
    readonly value: FunctionExpression | null;
    readonly kind: string;
    readonly static: boolean;
    constructor(key: Expression | PrivateIdentifier | null, computed: boolean, value: FunctionExpression | null, kind: string, isStatic: boolean) {
        this.type = Syntax.MethodDefinition;
        this.key = key;
        this.computed = computed;
        this.value = value;
        this.kind = kind;
        this.static = isStatic;
    }
}

export class Module {
    readonly type: Syntax.Program;
    readonly body: Statement[];
    readonly sourceType: string;
    constructor(body: Statement[]) {
        this.type = Syntax.Program;
        this.body = body;
        this.sourceType = 'module';
    }
}

export class NewExpression {
    readonly type: Syntax.NewExpression;
    readonly callee: Expression;
    readonly arguments: ArgumentListElement[];
    constructor(callee: Expression, args: ArgumentListElement[]) {
        this.type = Syntax.NewExpression;
        this.callee = callee;
        this.arguments = args;
    }
}

export class ObjectExpression {
    readonly type: Syntax.ObjectExpression;
    readonly properties: ObjectExpressionProperty[];
    constructor(properties: ObjectExpressionProperty[]) {
        this.type = Syntax.ObjectExpression;
        this.properties = properties;
    }
}

export class ObjectPattern {
    readonly type: Syntax.ObjectPattern;
    readonly properties: ObjectPatternProperty[];
    constructor(properties: ObjectPatternProperty[]) {
        this.type = Syntax.ObjectPattern;
        this.properties = properties;
    }
}

export class PrivateIdentifier {
    readonly type: Syntax.PrivateIdentifier;
    readonly name: string;
    constructor(name) {
        this.type = Syntax.PrivateIdentifier;
        this.name = name;
    }
}

export class Program {
    readonly type: Syntax.Program;
    readonly body: Statement[]
    readonly sourceType: 'script' | 'module';
    constructor(sourceType: 'script' | 'module', body: Statement[]) {
        this.type = Syntax.Program;
        this.sourceType = sourceType;
        this.body = body;
    }
}

export class Property {
    readonly type: Syntax.Property;
    readonly key: PropertyKey;
    readonly computed: boolean;
    readonly value: PropertyValue | null;
    readonly kind: string;
    readonly method: boolean;
    readonly shorthand: boolean;
    constructor(kind: string, key: PropertyKey, computed: boolean, value: PropertyValue | null, method: boolean, shorthand: boolean) {
        this.type = Syntax.Property;
        this.key = key;
        this.computed = computed;
        this.value = value;
        this.kind = kind;
        this.method = method;
        this.shorthand = shorthand;
    }
}

export class PropertyDefinition {
    readonly type: Syntax.Property;
    readonly key: PropertyKey;
    readonly computed: boolean;
    readonly value: PropertyValue | null;
    readonly static: boolean;
    constructor(key: PropertyKey, computed: boolean, value: PropertyValue | null, isStatic: boolean) {
        this.type = Syntax.Property;
        this.key = key;
        this.computed = computed;
        this.value = value;
        this.static = isStatic;
    }
}

export class RegexLiteral {
    readonly type: Syntax.Literal;
    readonly value: RegExp;
    readonly raw: string;
    readonly regex: { pattern: string; flags: string };
    constructor(value: RegExp, raw: string, pattern: string, flags: string) {
        this.type = Syntax.Literal;
        this.value = value;
        this.raw = raw;
        this.regex = { pattern, flags };
    }
}

export class RestElement {
    readonly type: Syntax.RestElement;
    readonly argument: BindingIdentifier | BindingPattern;
    constructor(argument: BindingIdentifier | BindingPattern) {
        this.type = Syntax.RestElement;
        this.argument = argument;
    }
}

export class ReturnStatement {
    readonly type: Syntax.ReturnStatement;
    readonly argument: Expression | null;
    constructor(argument: Expression | null) {
        this.type = Syntax.ReturnStatement;
        this.argument = argument;
    }
}

export class Script {
    readonly type: Syntax.Program;
    readonly body: Statement[];
    readonly sourceType: string;
    constructor(body: Statement[]) {
        this.type = Syntax.Program;
        this.body = body;
        this.sourceType = 'script';
    }
}

export class SequenceExpression {
    readonly type: Syntax.SequenceExpression;
    readonly expressions: Expression[];
    constructor(expressions: Expression[]) {
        this.type = Syntax.SequenceExpression;
        this.expressions = expressions;
    }
}

export class SpreadElement {
    readonly type: Syntax.SpreadElement;
    readonly argument: Expression;
    constructor(argument: Expression) {
        this.type = Syntax.SpreadElement;
        this.argument = argument;
    }
}

export class StaticBlock {
    readonly type: Syntax.StaticBlock;
    readonly body: Statement[];
    constructor(body) {
        this.type = Syntax.StaticBlock;
        this.body = body;
    }
}

export class Super {
    readonly type: Syntax.Super;
    constructor() {
        this.type = Syntax.Super;
    }
}

export class SwitchCase {
    readonly type: Syntax.SwitchCase;
    readonly test: Expression | null;
    readonly consequent: Statement[];
    constructor(test: Expression, consequent: Statement[]) {
        this.type = Syntax.SwitchCase;
        this.test = test;
        this.consequent = consequent;
    }
}

export class SwitchStatement {
    readonly type: Syntax.SwitchStatement;
    readonly discriminant: Expression;
    readonly cases: SwitchCase[];
    constructor(discriminant: Expression, cases: SwitchCase[]) {
        this.type = Syntax.SwitchStatement;
        this.discriminant = discriminant;
        this.cases = cases;
    }
}

export class TaggedTemplateExpression {
    readonly type: Syntax.TaggedTemplateExpression;
    readonly tag: Expression;
    readonly quasi: TemplateLiteral;
    constructor(tag: Expression, quasi: TemplateLiteral) {
        this.type = Syntax.TaggedTemplateExpression;
        this.tag = tag;
        this.quasi = quasi;
    }
}

interface TemplateElementValue {
    cooked: string | null;
    raw: string;
}

export class TemplateElement {
    readonly type: Syntax.TemplateElement;
    readonly value: TemplateElementValue;
    readonly tail: boolean;
    constructor(value: TemplateElementValue, tail: boolean) {
        this.type = Syntax.TemplateElement;
        this.value = value;
        this.tail = tail;
    }
}

export class TemplateLiteral {
    readonly type: Syntax.TemplateLiteral;
    readonly quasis: TemplateElement[];
    readonly expressions: Expression[];
    constructor(quasis: TemplateElement[], expressions: Expression[]) {
        this.type = Syntax.TemplateLiteral;
        this.quasis = quasis;
        this.expressions = expressions;
    }
}

export class ThisExpression {
    readonly type: Syntax.ThisExpression;
    constructor() {
        this.type = Syntax.ThisExpression;
    }
}

export class ThrowStatement {
    readonly type: Syntax.ThrowStatement;
    readonly argument: Expression;
    constructor(argument: Expression) {
        this.type = Syntax.ThrowStatement;
        this.argument = argument;
    }
}

export class TryStatement {
    readonly type: Syntax.TryStatement;
    readonly block: BlockStatement;
    readonly handler: CatchClause | null;
    readonly finalizer: BlockStatement | null;
    constructor(block: BlockStatement, handler: CatchClause | null, finalizer: BlockStatement | null) {
        this.type = Syntax.TryStatement;
        this.block = block;
        this.handler = handler;
        this.finalizer = finalizer;
    }
}

export class UnaryExpression {
    readonly type: Syntax.UnaryExpression;
    readonly operator: string;
    readonly argument: Expression;
    readonly prefix: boolean;
    constructor(operator, argument) {
        this.type = Syntax.UnaryExpression;
        this.operator = operator;
        this.argument = argument;
        this.prefix = true;
    }
}

export class UpdateExpression {
    readonly type: Syntax.UpdateExpression;
    readonly operator: string;
    readonly argument: Expression;
    readonly prefix: boolean;
    constructor(operator, argument, prefix) {
        this.type = Syntax.UpdateExpression;
        this.operator = operator;
        this.argument = argument;
        this.prefix = prefix;
    }
}

export class VariableDeclaration {
    readonly type: Syntax.VariableDeclaration;
    readonly declarations: VariableDeclarator[];
    readonly kind: string;
    constructor(declarations: VariableDeclarator[], kind: string) {
        this.type = Syntax.VariableDeclaration;
        this.declarations = declarations;
        this.kind = kind;
    }
}

export class VariableDeclarator {
    readonly type: Syntax.VariableDeclarator;
    readonly id: BindingIdentifier | BindingPattern;
    readonly init: Expression | null;
    constructor(id: BindingIdentifier | BindingPattern, init: Expression | null) {
        this.type = Syntax.VariableDeclarator;
        this.id = id;
        this.init = init;
    }
}

export class WhileStatement {
    readonly type: Syntax.WhileStatement;
    readonly test: Expression;
    readonly body: Statement;
    constructor(test: Expression, body: Statement) {
        this.type = Syntax.WhileStatement;
        this.test = test;
        this.body = body;
    }
}

export class WithStatement {
    readonly type: Syntax.WithStatement;
    readonly object: Expression;
    readonly body: Statement;
    constructor(object: Expression, body: Statement) {
        this.type = Syntax.WithStatement;
        this.object = object;
        this.body = body;
    }
}

export class YieldExpression {
    readonly type: Syntax.YieldExpression;
    readonly argument: Expression | null;
    readonly delegate: boolean;
    constructor(argument: Expression | null, delegate: boolean) {
        this.type = Syntax.YieldExpression;
        this.argument = argument;
        this.delegate = delegate;
    }
}
