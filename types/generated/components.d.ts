import type { Schema, Attribute } from '@strapi/strapi';

export interface TestClass extends Schema.Component {
  collectionName: 'components_test_classes';
  info: {
    displayName: 'Class';
    icon: 'cast';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    attach: Attribute.Media & Attribute.Required;
  };
}

export interface TestQuestion extends Schema.Component {
  collectionName: 'components_test_questions';
  info: {
    displayName: 'Question';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.class': TestClass;
      'test.question': TestQuestion;
    }
  }
}
