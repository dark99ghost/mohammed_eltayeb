var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
var import_supabase_js = require("@supabase/supabase-js");

// src/data.ts
var PROJECTS_DATA = [
  {
    id: "metal-waves",
    title: "\u0645\u0641\u0647\u0648\u0645 \u0627\u0644\u062A\u0645\u0648\u062C\u0627\u062A \u0627\u0644\u0645\u0639\u062F\u0646\u064A\u0629 \u0627\u0644\u0645\u0635\u0642\u0648\u0644\u0629",
    category: "\u062A\u0635\u0645\u064A\u0645 \u0645\u0646\u062A\u062C\u0627\u062A \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F",
    description: "\u0646\u0645\u0648\u0630\u062C \u062A\u062C\u0631\u064A\u062F\u064A \u064A\u0633\u062A\u0639\u0631\u0636 \u062A\u0641\u0627\u0639\u0644 \u0627\u0644\u0625\u0636\u0627\u0621\u0629 \u0627\u0644\u0633\u064A\u0646\u0645\u0627\u0626\u064A\u0629 \u0645\u0639 \u0627\u0644\u0623\u0633\u0637\u062D \u0627\u0644\u0645\u0639\u062F\u0646\u064A\u0629 \u0627\u0644\u0645\u0646\u062D\u0646\u064A\u0629 \u0641\u0627\u0626\u0642\u0629 \u0627\u0644\u0646\u0639\u0648\u0645\u0629 \u0645\u0639 \u0644\u0645\u0633\u0627\u062A \u0645\u0646 \u0627\u0644\u0643\u0631\u0648\u0645 \u0627\u0644\u0644\u0627\u0645\u0639.",
    tools: ["Blender", "Substance Painter", "Cycles"],
    specs: {
      polygons: "140K Triangles",
      textures: "4K PBR Materials",
      renderTime: "12 mins (GPU)"
    }
  },
  {
    id: "cyber-watch",
    title: "\u0633\u0627\u0639\u0629 \u0627\u0644\u064A\u062F \u0627\u0644\u062A\u064A\u062A\u0627\u0646\u064A\u0648\u0645 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u064A\u0629",
    category: "\u062A\u0635\u0645\u064A\u0645 \u0645\u0646\u062A\u062C\u0627\u062A",
    description: "\u062A\u0635\u0645\u064A\u0645 \u0645\u064A\u0643\u0627\u0646\u064A\u0643\u064A \u062F\u0642\u064A\u0642 \u0644\u0633\u0627\u0639\u0629 \u064A\u062F \u0631\u064A\u0627\u0636\u064A\u0629 \u0641\u0627\u062E\u0631\u0629 \u0645\u0635\u0646\u0648\u0639\u0629 \u0645\u0646 \u0623\u0644\u064A\u0627\u0641 \u0627\u0644\u0643\u0631\u0628\u0648\u0646 \u0648\u0627\u0644\u062A\u064A\u062A\u0627\u0646\u064A\u0648\u0645 \u0627\u0644\u0645\u0635\u0642\u0648\u0644 \u0645\u0639 \u0622\u0644\u064A\u0629 \u062D\u0631\u0643\u0629 \u0645\u0631\u0626\u064A\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644.",
    tools: ["Cinema 4D", "Octane Render", "ZBrush"],
    specs: {
      polygons: "850K Triangles",
      textures: "8K Procedural",
      renderTime: "45 mins (Octane)"
    }
  },
  {
    id: "desert-vfx",
    title: "\u0644\u0642\u0637\u0629 \u062F\u0645\u062C \u0633\u064A\u0646\u0645\u0627\u0626\u064A \u0644\u0628\u064A\u0626\u0629 \u0648\u0627\u062D\u0627\u062A \u0642\u0646\u0627",
    category: "\u0645\u0624\u062B\u0631\u0627\u062A \u0628\u0635\u0631\u064A\u0629 CGI",
    description: "\u062F\u0645\u062C \u0639\u0646\u0627\u0635\u0631 \u062E\u064A\u0627\u0644 \u0639\u0644\u0645\u064A \u062B\u0644\u0627\u062B\u064A\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062F \u0645\u0639 \u0644\u0642\u0637\u0627\u062A \u0637\u0627\u0626\u0631\u0629 \u0628\u062F\u0648\u0646 \u0637\u064A\u0627\u0631 \u062D\u0642\u064A\u0642\u064A\u0629 \u062A\u0645 \u062A\u0635\u0648\u064A\u0631\u0647\u0627 \u0641\u064A \u0635\u062D\u0631\u0627\u0621 \u0642\u0646\u0627 \u0628\u0645\u0635\u0631\u060C \u0645\u0639 \u0645\u062D\u0627\u0643\u0627\u0629 \u0648\u0627\u0642\u0639\u064A\u0629 \u0644\u0644\u0631\u0645\u0627\u0644 \u0648\u0627\u0644\u063A\u0628\u0627\u0631.",
    tools: ["Houdini", "Unreal Engine 5", "Nuke"],
    specs: {
      polygons: "12M Polygons (Nanite)",
      textures: "Quixel Megascans",
      renderTime: "Real-time 60fps"
    }
  },
  {
    id: "minimal-concept-car",
    title: "\u0647\u064A\u0643\u0644 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629 \u0627\u0644\u0647\u0648\u0627\u0626\u064A\u0629",
    category: "\u062A\u0635\u0645\u064A\u0645 \u0633\u064A\u0627\u0631\u0627\u062A",
    description: "\u062F\u0631\u0627\u0633\u0629 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A\u0629 \u0647\u0648\u0627\u0626\u064A\u0629 \u0644\u0647\u064A\u0643\u0644 \u0633\u064A\u0627\u0631\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0641\u0627\u0626\u0642\u0629 \u0627\u0644\u0633\u0631\u0639\u0629\u060C \u064A\u0631\u0643\u0632 \u0639\u0644\u0649 \u0627\u0644\u0627\u0646\u0633\u064A\u0627\u0628\u064A\u0629 \u0627\u0644\u0639\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062E\u0637\u0648\u0637 \u0627\u0644\u0645\u0645\u062A\u062F\u0629 \u0648\u0627\u0644\u0623\u0633\u0637\u062D \u0627\u0644\u0632\u062C\u0627\u062C\u064A\u0629 \u0627\u0644\u0645\u062F\u0645\u062C\u0629.",
    tools: ["Blender", "Alias", "KeyShot"],
    specs: {
      polygons: "2.3M Triangles",
      textures: "Custom Paint Shader",
      renderTime: "25 mins (Keyshot)"
    }
  }
];

// server.ts
import_dotenv.default.config();
var supabaseUrl = "https://kievdmspnsxemvrncdae.supabase.co";
var supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZXZkbXNwbnN4ZW12cm5jZGFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyMDk2MTAsImV4cCI6MjA5OTc4NTYxMH0.CNQw09ImGAFWLhQhgup_5fOeQRRvMSr7BFQM1OsGUy0";
var supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseKey);
console.log("Supabase service initialized with hardcoded credentials.");
var inMemorySubmissions = [];
var inMemoryProjects = [...PROJECTS_DATA];
var inMemoryProfilePic = "";
async function getProfilePic() {
  try {
    const { data, error } = await supabase.from("profile_settings").select("profile_pic_url").eq("id", "main_profile").single();
    if (error) {
      if (error.code !== "PGRST116") {
        console.error("Supabase Profile Fetch Error:", error.message, error.details);
      }
      return inMemoryProfilePic;
    }
    return data?.profile_pic_url || inMemoryProfilePic;
  } catch (err) {
    console.error("Critical Profile Fetch Error:", err.message);
    return inMemoryProfilePic;
  }
}
async function updateProfilePic(url) {
  inMemoryProfilePic = url;
  try {
    const { error } = await supabase.from("profile_settings").upsert({ id: "main_profile", profile_pic_url: url, updated_at: (/* @__PURE__ */ new Date()).toISOString() });
    if (error) {
      console.error("Supabase Profile Update Error:", error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Critical Profile Update Error:", err.message);
    return false;
  }
}
async function getSubmissions() {
  try {
    const { data, error } = await supabase.from("submissions").select("*").order("created_at", { ascending: false });
    if (error) {
      console.error("Supabase Submissions Fetch Error:", error.message);
      return inMemorySubmissions;
    }
    return (data || []).map((row) => ({
      id: row.id,
      type: row.type,
      name: row.name,
      email: row.email,
      details: row.details,
      serviceId: row.service_id,
      serviceTitle: row.service_title,
      duration: row.duration,
      createdAt: row.created_at
    }));
  } catch (err) {
    console.error("Critical Submissions Fetch Error:", err.message);
    return inMemorySubmissions;
  }
}
async function addSubmission(sub) {
  inMemorySubmissions.unshift(sub);
  try {
    const { error } = await supabase.from("submissions").insert([{
      id: sub.id,
      type: sub.type,
      name: sub.name,
      email: sub.email,
      details: sub.details,
      service_id: sub.serviceId || null,
      service_title: sub.serviceTitle || null,
      duration: sub.duration || null,
      created_at: sub.createdAt
    }]);
    if (error) {
      console.error("Supabase Submission Insert Error:", error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Critical Submission Insert Error:", err.message);
    return false;
  }
}
async function getProjects() {
  try {
    const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
    if (error) {
      console.error("Supabase Projects Fetch Error:", error.message);
      return inMemoryProjects;
    }
    if (!data || data.length === 0) {
      console.log("Supabase projects table is empty. Auto-seeding with default PROJECTS_DATA...");
      const seedRows = PROJECTS_DATA.map((proj) => ({
        id: proj.id,
        title: proj.title,
        description: proj.description,
        category: proj.category,
        tools: proj.tools,
        polygons: proj.specs.polygons,
        textures: proj.specs.textures,
        render_time: proj.specs.renderTime,
        images: proj.images || [],
        cover_image: proj.coverImage || proj.images && proj.images[0] || "",
        behance_url: proj.behanceUrl || ""
      }));
      const { error: seedError } = await supabase.from("projects").insert(seedRows);
      if (seedError) {
        console.error("Failed to seed projects to Supabase:", seedError.message);
      } else {
        console.log("Seeding projects succeeded!");
        const { data: reFetched, error: reFetchError } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
        if (!reFetchError && reFetched) return reFetched.map((row) => parseProjectRow(row));
      }
    }
    return (data || []).map((row) => parseProjectRow(row));
  } catch (err) {
    console.error("Critical Projects Fetch Error:", err.message);
    return inMemoryProjects;
  }
}
function parseProjectRow(row) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    category: row.category,
    tools: row.tools || [],
    specs: {
      polygons: row.polygons || "120K",
      textures: row.textures || "4K PBR",
      renderTime: row.render_time || "4 hrs"
    },
    images: row.images || [],
    coverImage: row.cover_image || null,
    behanceUrl: row.behance_url || null,
    createdAt: row.created_at
  };
}
async function createProject(proj) {
  inMemoryProjects.unshift(proj);
  try {
    const { error } = await supabase.from("projects").insert([{
      id: proj.id,
      title: proj.title,
      description: proj.description,
      category: proj.category,
      tools: proj.tools || [],
      polygons: proj.specs?.polygons || "120K",
      textures: proj.specs?.textures || "4K PBR",
      render_time: proj.specs?.renderTime || "4 hrs",
      images: proj.images || [],
      cover_image: proj.coverImage || "",
      behance_url: proj.behanceUrl || ""
    }]);
    if (error) {
      console.error("Supabase Project Insert Error:", error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Critical Project Insert Error:", err.message);
    return false;
  }
}
async function deleteProject(id) {
  inMemoryProjects = inMemoryProjects.filter((p) => p.id !== id);
  try {
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) {
      console.error("Supabase Project Delete Error:", error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Critical Project Delete Error:", err.message);
    return false;
  }
}
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json({ limit: "15mb" }));
  app.get("/api/projects", async (req, res) => {
    try {
      const p = await getProjects();
      res.json(p);
    } catch (e) {
      res.status(500).json({ error: "Failed to fetch projects." });
    }
  });
  app.post("/api/projects", async (req, res) => {
    try {
      const success = await createProject(req.body);
      if (success) {
        res.status(201).json({ success: true, project: req.body });
      } else {
        res.status(500).json({ error: "Failed to save project to Supabase." });
      }
    } catch (e) {
      res.status(500).json({ error: "Server error." });
    }
  });
  app.delete("/api/projects/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const success = await deleteProject(id);
      if (success) {
        res.json({ success: true });
      } else {
        res.status(500).json({ error: "Failed to delete project from Supabase." });
      }
    } catch (e) {
      res.status(500).json({ error: "Server error." });
    }
  });
  app.post("/api/submissions", async (req, res) => {
    try {
      const { type, name, email, details, serviceId, serviceTitle, duration } = req.body;
      if (!name || !email || !details) {
        return res.status(400).json({ error: "\u0627\u0644\u0627\u0633\u0645 \u0648\u0627\u0644\u0628\u0631\u064A\u062F \u0648\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u062D\u0642\u0648\u0644 \u0645\u0637\u0644\u0648\u0628\u0629." });
      }
      const newSubmission = {
        id: `sub-${Date.now()}`,
        type,
        name,
        email,
        details,
        serviceId,
        serviceTitle,
        duration,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      const dbSuccess = await addSubmission(newSubmission);
      res.status(201).json({
        success: true,
        message: "\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u0628\u0646\u062C\u0627\u062D \u0641\u064A \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A.",
        savedToSupabase: dbSuccess && !!supabase,
        submission: newSubmission
      });
    } catch (err) {
      console.error("Submission error:", err);
      res.status(500).json({ error: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0637\u0644\u0628." });
    }
  });
  app.get("/api/admin/submissions", async (req, res) => {
    try {
      const list = await getSubmissions();
      res.json(list);
    } catch (e) {
      res.status(500).json({ error: "Failed to load submissions" });
    }
  });
  app.get("/api/profile", async (req, res) => {
    try {
      const url = await getProfilePic();
      res.json({ profilePicUrl: url });
    } catch (e) {
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  });
  app.post("/api/admin/profile", async (req, res) => {
    try {
      const { profilePicUrl } = req.body;
      const success = await updateProfilePic(profilePicUrl);
      if (success) {
        res.json({ success: true });
      } else {
        res.status(500).json({ error: "Failed to update profile" });
      }
    } catch (e) {
      res.status(500).json({ error: "Server error" });
    }
  });
  app.post("/api/gemini/generate", async (req, res) => {
    try {
      const { prompt, systemInstruction } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
      }
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "\u0645\u0641\u062A\u0627\u062D API \u0627\u0644\u062E\u0627\u0635 \u0628\u0640 Gemini \u063A\u064A\u0631 \u0645\u0647\u064A\u0623 \u0641\u064A \u0627\u0644\u0633\u064A\u0631\u0641\u0631. \u064A\u0631\u062C\u0649 \u0625\u0636\u0627\u0641\u062A\u0647 \u0641\u064A \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 Settings > Secrets."
        });
      }
      const ai = new import_genai.GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build"
          }
        }
      });
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: systemInstruction ? { systemInstruction } : void 0
      });
      res.json({ text: response.text });
    } catch (error) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0637\u0644\u0628 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A." });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
