package com.agenda.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QTelefono is a Querydsl query type for Telefono
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTelefono extends EntityPathBase<Telefono> {

    private static final long serialVersionUID = 1491391978L;

    public static final QTelefono telefono = new QTelefono("telefono");

    public final NumberPath<Integer> contacto = createNumber("contacto", Integer.class);

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final StringPath numero = createString("numero");

    public final StringPath tipo = createString("tipo");

    public QTelefono(String variable) {
        super(Telefono.class, forVariable(variable));
    }

    public QTelefono(Path<? extends Telefono> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTelefono(PathMetadata metadata) {
        super(Telefono.class, metadata);
    }

}

