# 📦 Mastering Mongoose — Summary

## Overview
Mongoose is an Object Data Modeling (ODM) library for MongoDB in Node.js.  
It provides schemas, validation, middleware, query helpers, and type safety when paired with TypeScript.

## Key Concepts

### 🗂 Schemas & Models
- **Schema**: Defines the structure and rules for documents.
- **Model**: Provides an interface to interact with MongoDB collections.
- Common data types: `String`, `Number`, `Boolean`, `Date`, `Array`, `ObjectId`.
- Options:
  - `timestamps`: Auto-adds `createdAt` & `updatedAt`.
  - `versionKey`: Hides `__v` version field.

### 🔄 CRUD Operations
- **Create** → `Model.create(data)` or `new Model(data).save()`
- **Read** → `Model.find()`, `Model.findById(id)`
- **Update** → `Model.findByIdAndUpdate(id, updateData, { new: true })`
- **Delete** → `Model.findByIdAndDelete(id)`

### ✅ Validation
- **Built-in**: `required`, `minlength`, `maxlength`, `min`, `max`.
- **Custom validators**: Functions to enforce rules.
- **Third-party**: e.g., `validator` package.
- **External validation**: Using libraries like Zod before saving.

### 🔗 Relationships
- **Embedding**: Store related data inside the same document.
- **Referencing**: Store IDs of related documents and use `.populate()` to fetch them.

### ⚙️ Advanced Features
- **Instance Methods**: Functions available on document instances.
- **Static Methods**: Functions available on the Model itself.
- **Middleware (Hooks)**:
  - Pre-hooks → Run before certain actions (`save`, `find`).
  - Post-hooks → Run after actions.
- **Query Middleware**: Modify queries before execution.
- **Virtuals**: Computed properties that are not stored in DB.
- **Query Helpers**: Filter, sort, skip, and limit results.

### 🛠 Project Structure
project/
├── models/ # Mongoose schemas & models
├── routes/ # API endpoints
├── controllers/ # Request handling logic
├── services/ # Business logic
├── index.js # App entry point

markdown
Copy
Edit

### 💡 TypeScript Integration
- Use interfaces for schema types.
- Improves type safety and reduces runtime errors.

## 🚀 Key Takeaways
- Mongoose adds structure, validation, and advanced capabilities to MongoDB.
- Use schemas for consistency and maintainability.
- Middleware, virtuals, and instance/static methods keep logic organized.
- Choose embedding or referencing based on project needs.
