package com.agenda.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QEmail is a Querydsl query type for Email
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QEmail extends EntityPathBase<Email> {

    private static final long serialVersionUID = 967357542L;

    public static final QEmail email = new QEmail("email");

    public final NumberPath<Integer> contacto = createNumber("contacto", Integer.class);

    public final StringPath correo = createString("correo");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final StringPath tipo = createString("tipo");

    public QEmail(String variable) {
        super(Email.class, forVariable(variable));
    }

    public QEmail(Path<? extends Email> path) {
        super(path.getType(), path.getMetadata());
    }

    public QEmail(PathMetadata metadata) {
        super(Email.class, metadata);
    }

}

