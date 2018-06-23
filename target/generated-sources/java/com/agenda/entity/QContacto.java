package com.agenda.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QContacto is a Querydsl query type for Contacto
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QContacto extends EntityPathBase<Contacto> {

    private static final long serialVersionUID = -2010526907L;

    public static final QContacto contacto = new QContacto("contacto");

    public final StringPath direccion = createString("direccion");

    public final NumberPath<Integer> edad = createNumber("edad", Integer.class);

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final StringPath materno = createString("materno");

    public final StringPath nombre = createString("nombre");

    public final StringPath paterno = createString("paterno");

    public final StringPath sexo = createString("sexo");

    public QContacto(String variable) {
        super(Contacto.class, forVariable(variable));
    }

    public QContacto(Path<? extends Contacto> path) {
        super(path.getType(), path.getMetadata());
    }

    public QContacto(PathMetadata metadata) {
        super(Contacto.class, metadata);
    }

}

