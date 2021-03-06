var global_id=0;
var color_array=[
    '#E81123',
    '#8764B8',
    '#00cc6a',
    '#00B7C3',
    '#498205',
    '#FFB900',
    '#C239B3',
    '#1073D6',
    '#724F2F',
];
var statements_info=[];
var regions_info=[];
read_file("statements_info.json",statements_info,true,false);
read_file("regions_info.json",regions_info,true,false);
var flag_erase=0;
var flag_common_variables=false;
var flag_shortcuts=false;
var flag_numberdumber=false;
var common_variable_names=[
    "a",
    "x",
    "i",
    "value",
    "p",
    "name",
    "xt",
    "file",
    "b",
    "item",
    "list",
    "state",
    "test",
    "c",
    "argcount",
    "check",
    "y",
    "none",
    "f",
    "t",
    "result",
    "status",
    "data",
    "set",
    "report",
    "instr",
    "used",
    "index",
    "unit",
    "text",
    "j",
    "right",
    "s",
    "one",
    "no",
    "parameter",
    "e",
    "input",
    "current",
    "prob",
    "g",
    "d",
    "ok",
    "n",
    "any",
    "values",
    "length",
    "l",
    "point",
    "zero",
    "position",
    "call",
    "output",
	];

var used_keywords=[];    //pseudo machine-learning.
var reserved_keywords=[
    'int',
    'long',
    'short',
    'double',
    'float',
    'string',
    'char',
    'size_t',
    'bool',
    'void',
    'signed',
    'unsigned',
    'enum',
    'delete',
    'this'

];
var shortcuts_symbols=[
    '%',
    '*',
    '-',
    '+',
    '/',
    '.',
    '<',
    '>',
    '(',
    ')',
    '>>',
    '<<',
    '|',
    '&',
    ' ',
    'Backspace',
    '*',
    '->',
    '0x',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'sizeof','true',
    'false'
    ];

var char_to_code={
    '&':"&amp;",
    ' ':"&nbsp;",
    '<':"&lt;",
    '>':"&gt;",
    '"':"&quot;",
    "'":"&apos;"
};
