var

    ATTRIBUTE = _regex('ATTRIBUTE'),
    CONST = _regex('CONST'),
    UNIFORM = _regex('UNIFORM'),
    VARYING = _regex('VARYING'),
    BUFFER = _regex('BUFFER'),
    SHARED = _regex('SHARED'),
    COHERENT = _regex('COHERENT'),
    VOLATILE = _regex('VOLATILE'),
    RESTRICT = _regex('RESTRICT'),
    READONLY = _regex('READONLY'),
    WRITEONLY = _regex('WRITEONLY'),
    ATOMIC_UINT = _regex('ATOMIC_UINT'),
    LAYOUT = _regex('LAYOUT'),
    CENTROID = _regex('CENTROID'),
    FLAT = _regex('FLAT'),
    SMOOTH = _regex('SMOOTH'),
    NOPERSPECTIVE = _regex('NOPERSPECTIVE'),
    PATCH = _regex('PATCH'),
    SAMPLE = _regex('SAMPLE'),
    BREAK = _regex('BREAK'),
    CONTINUE = _regex('CONTINUE'),
    DO = _regex('DO'),
    FOR = _regex('FOR'),
    WHILE = _regex('WHILE'),
    SWITCH = _regex('SWITCH'),
    CASE = _regex('CASE'),
    DEFAULT = _regex('DEFAULT'),
    IF = _regex('IF'),
    ELSE = _regex('ELSE'),
    SUBROUTINE = _regex('SUBROUTINE'),
    IN = _regex('IN'),
    OUT = _regex('OUT'),
    INOUT = _regex('INOUT'),
    FLOAT = _regex('FLOAT'),
    DOUBLE = _regex('DOUBLE'),
    INT = _regex('INT'),
    VOID = _regex('VOID'),
    BOOL = _regex('BOOL'),
    TRUE = _regex('TRUE'),
    FALSE = _regex('FALSE'),
    INVARIANT = _regex('INVARIANT'),
    PRECISE = _regex('PRECISE'),
    DISCARD = _regex('DISCARD'),
    RETURN = _regex('RETURN'),
    MAT2 = _regex('MAT2'),
    MAT3 = _regex('MAT3'),
    MAT4 = _regex('MAT4'),
    DMAT2 = _regex('DMAT2'),
    DMAT3 = _regex('DMAT3'),
    DMAT4 = _regex('DMAT4'),
    MAT2X2 = _regex('MAT2X2'),
    MAT2X3 = _regex('MAT2X3'),
    MAT2X4 = _regex('MAT2X4'),
    DMAT2X2 = _regex('DMAT2X2'),
    DMAT2X3 = _regex('DMAT2X3'),
    DMAT2X4 = _regex('DMAT2X4'),
    MAT3X2 = _regex('MAT3X2'),
    MAT3X3 = _regex('MAT3X3'),
    MAT3X4 = _regex('MAT3X4'),
    DMAT3X2 = _regex('DMAT3X2'),
    DMAT3X3 = _regex('DMAT3X3'),
    DMAT3X4 = _regex('DMAT3X4'),
    MAT4X2 = _regex('MAT4X2'),
    MAT4X3 = _regex('MAT4X3'),
    MAT4X4 = _regex('MAT4X4'),
    DMAT4X2 = _regex('DMAT4X2'),
    DMAT4X3 = _regex('DMAT4X3'),
    DMAT4X4 = _regex('DMAT4X4'),
    VEC2 = _regex('VEC2'),
    VEC3 = _regex('VEC3'),
    VEC4 = _regex('VEC4'),
    IVEC2 = _regex('IVEC2'),
    IVEC3 = _regex('IVEC3'),
    IVEC4 = _regex('IVEC4'),
    BVEC2 = _regex('BVEC2'),
    BVEC3 = _regex('BVEC3'),
    BVEC4 = _regex('BVEC4'),
    DVEC2 = _regex('DVEC2'),
    DVEC3 = _regex('DVEC3'),
    DVEC4 = _regex('DVEC4'),
    UINT = _regex('UINT'),
    UVEC2 = _regex('UVEC2'),
    UVEC3 = _regex('UVEC3'),
    UVEC4 = _regex('UVEC4'),
    LOWP = _regex('LOWP'),
    MEDIUMP = _regex('MEDIUMP'),
    HIGHP = _regex('HIGHP'),
    PRECISION = _regex('PRECISION'),
    SAMPLER1d = _regex('SAMPLER1d'),
    SAMPLER2d = _regex('SAMPLER2d'),
    SAMPLER3d = _regex('SAMPLER3d'),
    SAMPLERcUBE = _regex('SAMPLERcUBE'),
    SAMPLER1dsHADOW = _regex('SAMPLER1dsHADOW'),
    SAMPLER2dsHADOW = _regex('SAMPLER2dsHADOW'),
    SAMPLERcUBEsHADOW = _regex('SAMPLERcUBEsHADOW'),
    SAMPLER1daRRAY = _regex('SAMPLER1daRRAY'),
    SAMPLER2daRRAY = _regex('SAMPLER2daRRAY'),
    SAMPLER1daRRAYsHADOW = _regex('SAMPLER1daRRAYsHADOW'),
    SAMPLER2daRRAYsHADOW = _regex('SAMPLER2daRRAYsHADOW'),
    ISAMPLER1d = _regex('ISAMPLER1d'),
    ISAMPLER2d = _regex('ISAMPLER2d'),
    ISAMPLER3d = _regex('ISAMPLER3d'),
    ISAMPLERcUBE = _regex('ISAMPLERcUBE'),
    ISAMPLER1daRRAY = _regex('ISAMPLER1daRRAY'),
    ISAMPLER2daRRAY = _regex('ISAMPLER2daRRAY'),
    USAMPLER1d = _regex('USAMPLER1d'),
    USAMPLER2d = _regex('USAMPLER2d'),
    USAMPLER3d = _regex('USAMPLER3d'),
    USAMPLERcUBE = _regex('USAMPLERcUBE'),
    USAMPLER1daRRAY = _regex('USAMPLER1daRRAY'),
    USAMPLER2daRRAY = _regex('USAMPLER2daRRAY'),
    SAMPLER2drECT = _regex('SAMPLER2drECT'),
    SAMPLER2drECTsHADOW = _regex('SAMPLER2drECTsHADOW'),
    ISAMPLER2drECT = _regex('ISAMPLER2drECT'),
    USAMPLER2drECT = _regex('USAMPLER2drECT'),
    SAMPLERbUFFER = _regex('SAMPLERbUFFER'),
    ISAMPLERbUFFER = _regex('ISAMPLERbUFFER'),
    USAMPLERbUFFER = _regex('USAMPLERbUFFER'),
    SAMPLER2dms = _regex('SAMPLER2dms'),
    ISAMPLER2dms = _regex('ISAMPLER2dms'),
    USAMPLER2dms = _regex('USAMPLER2dms'),
    SAMPLER2dmsaRRAY = _regex('SAMPLER2dmsaRRAY'),
    ISAMPLER2dmsaRRAY = _regex('ISAMPLER2dmsaRRAY'),
    USAMPLER2dmsaRRAY = _regex('USAMPLER2dmsaRRAY'),
    SAMPLERcUBEaRRAY = _regex('SAMPLERcUBEaRRAY'),
    SAMPLERcUBEaRRAYsHADOW = _regex('SAMPLERcUBEaRRAYsHADOW'),
    ISAMPLERcUBEaRRAY = _regex('ISAMPLERcUBEaRRAY'),
    USAMPLERcUBEaRRAY = _regex('USAMPLERcUBEaRRAY'),
    IMAGE1d = _regex('IMAGE1d'),
    IIMAGE1d = _regex('IIMAGE1d'),
    UIMAGE1d = _regex('UIMAGE1d'),
    IMAGE2d = _regex('IMAGE2d'),
    IIMAGE2d = _regex('IIMAGE2d'),
    UIMAGE2d = _regex('UIMAGE2d'),
    IMAGE3d = _regex('IMAGE3d'),
    IIMAGE3d = _regex('IIMAGE3d'),
    UIMAGE3d = _regex('UIMAGE3d'),
    IMAGE2drECT = _regex('IMAGE2drECT'),
    IIMAGE2drECT = _regex('IIMAGE2drECT'),
    UIMAGE2drECT = _regex('UIMAGE2drECT'),
    IMAGEcUBE = _regex('IMAGEcUBE'),
    IIMAGEcUBE = _regex('IIMAGEcUBE'),
    UIMAGEcUBE = _regex('UIMAGEcUBE'),
    IMAGEbUFFER = _regex('IMAGEbUFFER'),
    IIMAGEbUFFER = _regex('IIMAGEbUFFER'),
    UIMAGEbUFFER = _regex('UIMAGEbUFFER'),
    IMAGE1daRRAY = _regex('IMAGE1daRRAY'),
    IIMAGE1daRRAY = _regex('IIMAGE1daRRAY'),
    UIMAGE1daRRAY = _regex('UIMAGE1daRRAY'),
    IMAGE2daRRAY = _regex('IMAGE2daRRAY'),
    IIMAGE2daRRAY = _regex('IIMAGE2daRRAY'),
    UIMAGE2daRRAY = _regex('UIMAGE2daRRAY'),
    IMAGEcUBEaRRAY = _regex('IMAGEcUBEaRRAY'),
    IIMAGEcUBEaRRAY = _regex('IIMAGEcUBEaRRAY'),
    UIMAGEcUBEaRRAY = _regex('UIMAGEcUBEaRRAY'),
    IMAGE2dms = _regex('IMAGE2dms'),
    IIMAGE2dms = _regex('IIMAGE2dms'),
    UIMAGE2dms = _regex('UIMAGE2dms'),
    IMAGE2dmsaRRAY = _regex('IMAGE2dmsaRRAY'),
    IIMAGE2dmsaRRAY = _regex('IIMAGE2dmsaRRAY'),
    UIMAGE2dmsaRRAY = _regex('UIMAGE2dmsaRRAY'),
    STRUCT = _regex('STRUCT');
