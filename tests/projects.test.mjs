import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { projects } from "../src/features/data/projects.ts";

test("project records have unique IDs and complete display content", () => {
  assert.ok(projects.length > 0, "at least one project should be displayed");

  const ids = projects.map(({ id }) => id);
  assert.equal(new Set(ids).size, ids.length, "project IDs should be unique");

  for (const project of projects) {
    assert.ok(Number.isInteger(project.id), `project ${project.title} needs an integer ID`);
    assert.ok(project.title.trim(), `project ${project.id} needs a French title`);
    assert.ok(project.description.trim(), `project ${project.title} needs a French description`);
    assert.ok((project.titleEn ?? project.title).trim(), `project ${project.title} needs an English fallback`);
    assert.ok((project.descriptionEn ?? project.description).trim(), `project ${project.title} needs an English description or fallback`);
    assert.ok(project.stack.length > 0, `project ${project.title} needs at least one technology`);
    assert.match(project.github, /^https:\/\/github\.com\//, `project ${project.title} needs a GitHub URL`);
  }
});

test("project preview images resolve to files in public", () => {
  for (const project of projects) {
    if (!project.image) continue;

    const imagePath = path.resolve(process.cwd(), "public", project.image.replace(/^\//, ""));
    assert.ok(existsSync(imagePath), `${project.title} preview does not exist: ${project.image}`);
  }
});
