let currentYear = 2026;

const levelData = {

    1: {
        title: "FOUNDATION",
        description: "Introduction and foundational Structural Drafting learning materials.",
        drawing: false
    },

    2: {
        title: "DEVELOPING",
        description: "Developing knowledge and understanding of Structural Drafting concepts.",
        drawing: false
    },

    3: {
        title: "INTERMEDIATE",
        description: "Intermediate Structural Drafting concepts and guided learning activities.",
        drawing: false
    },

    4: {
        title: "APPLIED DRAFTING",
        description: "Applied Structural Drafting activities with drawing-based learning.",
        drawing: true
    },

    5: {
        title: "ADVANCED DRAFTING",
        description: "Advanced Structural Drafting activities and drawing-based assessment.",
        drawing: true
    }

};


let progress = JSON.parse(
    localStorage.getItem(`structDraftProgress${currentYear}`)
) || {
    1: {
        unlocked: true,
        completed: false,
        takes: [],
        bestScore: null
    },

    2: {
        unlocked: false,
        completed: false,
        takes: [],
        bestScore: null
    },

    3: {
        unlocked: false,
        completed: false,
        takes: [],
        bestScore: null
    },

    4: {
        unlocked: false,
        completed: false,
        takes: [],
        bestScore: null
    },

    5: {
        unlocked: false,
        completed: false,
        takes: [],
        bestScore: null
    }
};

const quizzes = {
    1: [
        { q: "What is the main purpose of structural drafting?", options: ["To communicate structural details clearly", "To make drawings look artistic", "To hide project information", "To reduce the number of plans"], correct: 0 },
        { q: "Which tool is commonly used to draw straight lines?", options: ["T-square or ruler", "Paintbrush", "Compass only", "Marker only"], correct: 0 },
        { q: "What does CAD stand for?", options: ["Computer Aided Design", "Creative Art Drawing", "Construction And Drafting", "Computer Artistic Design"], correct: 0 },
        { q: "What do hidden lines usually represent?", options: ["Edges or parts behind a surface", "Only titles and labels", "The border of the page", "Decorative elements"], correct: 0 },
        { q: "Why is accuracy important in drafting?", options: ["It helps ensure the construction is correct and safe", "It makes the drawing longer", "It removes the need for notes", "It changes the project style"], correct: 0 }
    ],
    2: [
        { q: "What is a section view used for?", options: ["To show an internal cut-through of a structure", "To hide the title block", "To make the page look full", "To replace all notes"], correct: 0 },
        { q: "What is the purpose of dimension lines?", options: ["To indicate measurement and size", "To fill empty space", "To create a border", "To decorate the drawing"], correct: 0 },
        { q: "What is a plan view?", options: ["A top view of a structure", "A decorative sketch", "A side view only", "A title box"], correct: 0 },
        { q: "Why are standard symbols used in drawings?", options: ["To communicate information clearly and consistently", "To hide important details", "To make the file larger", "To reduce the number of lines"], correct: 0 },
        { q: "What is the role of a title block?", options: ["To provide drawing information such as project details", "To act as a border only", "To replace the labels", "To remove dimensions"], correct: 0 }
    ],
    3: [
        { q: "What is a center line used for?", options: ["To show symmetry or the center of a feature", "To make the page darker", "To hide revision notes", "To erase extra lines"], correct: 0 },
        { q: "What is a leader line?", options: ["A line that points to a detail in the drawing", "A border around the page", "A decorative shape", "A color guide"], correct: 0 },
        { q: "What does GD&T stand for?", options: ["Geometric Dimensioning and Tolerancing", "General Drafting and Technical", "Graphic Design Technique", "Grid Drawing Tools"], correct: 0 },
        { q: "Why are revision notes important?", options: ["They show updates or changes made to the drawing", "They replace the labels", "They remove all dimensions", "They make the page longer"], correct: 0 },
        { q: "What is a detail callout?", options: ["A note that points to a smaller detailed area", "A random mark on the paper", "A page title", "A color sample"], correct: 0 }
    ],
    4: [
        { q: "Why are layers useful in CAD?", options: ["They help organize different drawing elements", "They make the file heavier", "They hide all the notes", "They remove the title block"], correct: 0 },
        { q: "What is a load path?", options: ["The direction in which forces travel through a structure", "A drawing border", "A color code", "A title label"], correct: 0 },
        { q: "What does hatching usually show in a drawing?", options: ["Materials or cut sections", "Only page decorations", "Only the border", "Only the labels"], correct: 0 },
        { q: "What does an offset in CAD do?", options: ["Creates a parallel copy at a set distance", "Deletes the drawing", "Changes the page size", "Removes the title"], correct: 0 },
        { q: "Why are material notes included in project drawings?", options: ["So the builder knows what to use", "To make the drawing look busy", "To hide the dimensions", "To remove labels"], correct: 0 }
    ],
    5: [
        { q: "What is an as-built drawing?", options: ["A drawing of the final structure after completion", "A random rough sketch", "A color chart", "A page title"], correct: 0 },
        { q: "Why are site plans important?", options: ["They show the structure in relation to its location", "They replace the notes", "They hide design details", "They remove labels"], correct: 0 },
        { q: "What is a shop drawing?", options: ["A detailed drawing for fabrication and assembly", "A decorative layout", "A title page", "A random note"], correct: 0 },
        { q: "Why are safety notes included in drawings?", options: ["To warn about hazards and precautions", "To make the page look full", "To hide labels", "To remove the title block"], correct: 0 },
        { q: "Why are compliance drawings important?", options: ["They show that the design follows rules and standards", "They replace all labels", "They remove the need for notes", "They make the drawing artistic"], correct: 0 }
    ]
};

let selectedAnswers = {};

function saveProgress() {

    localStorage.setItem(
        `structDraftProgress${currentYear}`,
        JSON.stringify(progress)
    );

}


function getPercentage() {

    let completed = 0;

    for (let i = 1; i <= 5; i++) {

        if (progress[i].completed) {
            completed++;
        }

    }

    return Math.round((completed / 5) * 100);

}


function dashboard() {

    if (currentYear === 2027) {
        document.querySelector("#app").innerHTML = `

            <section class="coming-soon">

                <div class="coming-soon-content">

                    <span class="eyebrow">
                        ${currentYear} • ACADEMIC YEAR
                    </span>

                    <h2>
                        Preparing New Modules
                    </h2>

                    <p>
                        We're working on exciting new content and modules for the 2027 academic year. Check back soon!
                    </p>

                    <div class="coming-soon-animation">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>

                    <button class="btn" onclick="switchYear(2026)">
                        RETURN TO 2026 →
                    </button>

                </div>

            </section>

        `;
        return;
    }

    let cards = "";

    for (let i = 1; i <= 5; i++) {

        const current = progress[i];
        const data = levelData[i];

        let status;
        let button = "";

        if (current.completed) {

            status = `
                <span class="status complete">
                    COMPLETED
                </span>
            `;

            button = `
                <button class="btn" onclick="openLevel(${i})">
                    REVIEW LEVEL →
                </button>
            `;

        }

        else if (current.unlocked) {

            status = `
                <span class="status unlocked">
                    UNLOCKED
                </span>
            `;

            button = `
                <button class="btn" onclick="openLevel(${i})">
                    START LEVEL →
                </button>
            `;

        }

        else {

            status = `
                <span class="status locked">
                    LOCKED
                </span>
            `;

            button = `
                <span class="status locked">
                    🔒 COMPLETE LEVEL ${i - 1}
                </span>
            `;

        }


        cards += `

            <article class="
                level
                ${current.unlocked ? "unlocked" : "locked"}
                ${current.completed ? "complete" : ""}
            ">

                <div class="number">
                    0${i}
                </div>

                <div class="level-info">

                    ${status}

                    <h3>
                        LEVEL 0${i}
                    </h3>

                    <p>
                        ${data.description}
                    </p>

                    <div class="meta">

                        <span>▣ MODULES</span>
                        <span>◇ ACTIVITY</span>
                        <span>✓ ASSESSMENT</span>

                        ${
                            data.drawing
                                ? "<span>⌗ DRAWING</span>"
                                : ""
                        }

                    </div>

                </div>

                <div>
                    ${button}
                </div>

            </article>

        `;

    }


    document.querySelector("#app").innerHTML = `

        <section class="path-overview">

            <div class="path-title">
                <span class="eyebrow">
                    ${currentYear} / STRUCTURAL DRAFTING
                </span>

                <h2>
                    LEARNING PATH
                </h2>
            </div>

            <div class="progress">

                <div class="progress-label">

                    <span>
                            PATH COMPLETION
                    </span>

                    <strong>
                        ${getPercentage()}%
                    </strong>

                </div>

                <div class="progress-track">

                    <div
                        class="progress-fill"
                        style="width:${getPercentage()}%"
                    ></div>

                </div>

            </div>

        </section>


        <section class="levels">

            ${cards}

        </section>

    `;

}


function openLevel(number) {

    if (!progress[number].unlocked) {

        return;

    }

    const data = levelData[number];

    document.querySelector("#app").innerHTML = `

        <section class="page">

            <button
                class="back"
                onclick="dashboard()"
            >
                ← BACK TO LEVELS
            </button>


            <div class="page-head">

                <span>
                    2026 • LEVEL 0${number}
                </span>

                <h2>
                    ${data.title}
                </h2>

                <p>
                    ${data.description}
                </p>

            </div>


            <div class="section-title">

                <h3>
                    LEARNING MODULES
                </h3>

            </div>


            <div class="content-grid">

                <div class="content-card">

                    <div class="icon">▣</div>

                    <h3>
                        Module 01
                    </h3>

                    <p>
                        Learning content will be placed here
                        by the researchers.
                    </p>

                    <button
                        class="btn secondary"
                        onclick="modulePreview()"
                        style="margin-top:15px"
                    >
                        VIEW MODULE
                    </button>

                </div>


                <div class="content-card">

                    <div class="icon">◇</div>

                    <h3>
                        Learning Activity
                    </h3>

                    <p>
                        Practice activities related to the
                        competencies of this level.
                    </p>

                    <button
                        class="btn secondary"
                        onclick="activityPreview(${number})"
                        style="margin-top:15px"
                    >
                        OPEN ACTIVITY
                    </button>

                </div>

            </div>


            ${
                data.drawing
                    ? `
                        <div class="assessment">

                            <h3>
                                DRAWING ACTIVITY
                            </h3>

                            <p>
                                This area is reserved for the
                                drawing-based Structural Drafting
                                activity for this level.
                            </p>

                            <button
                                class="btn secondary"
                                onclick="drawingPreview(${number})"
                            >
                                OPEN DRAWING AREA
                            </button>

                        </div>
                    `
                    : ""
            }


            <div class="assessment">

                <h3>
                    LEVEL ASSESSMENT
                </h3>

                <p>
                    Complete the assessment after studying
                    the learning materials and activities.
                </p>

                <button
                    class="btn"
                    onclick="assessment(${number})"
                    style="margin-bottom: 10px;"
                >
                    START ASSESSMENT →
                </button>

                <button
                    class="btn secondary"
                    onclick="assessmentHistory(${number})"
                >
                    TAKES: ${progress[number].takes.length}
                </button>

            </div>


            <div class="notice">

                The actual Structural Drafting learning
                materials, activities, questions, and
                assessment content will be inserted after
                the system framework is approved.

            </div>

        </section>

    `;

}


function assessmentHistory(number) {

    const takes = progress[number].takes;

    document.querySelector("#app").innerHTML = `

        <section class="page">

            <button
                class="back"
                onclick="openLevel(${number})"
            >
                ← BACK TO LEVEL
            </button>

            <div class="page-head">

                <span>
                    LEVEL 0${number} • ATTEMPT HISTORY
                </span>

                <h2>
                    Assessment History
                </h2>

                <p>
                    ${takes.length > 0 ? `You have completed ${takes.length} attempt${takes.length > 1 ? 's' : ''}.` : 'No attempts recorded yet.'}
                </p>

            </div>

            <div class="content-card">
                ${takes.length > 0 ? takes.map((take, index) => `
                    <div style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
                        <strong>Attempt ${index + 1}</strong><br>
                        Date: ${take.date}<br>
                        Score: ${take.score}%<br>
                        Result: ${take.passed ? 'PASSED' : 'NEEDS REVIEW'}
                    </div>
                `).join('') : `
                    <p>No recorded attempts for this level yet.</p>
                `}
            </div>

        </section>

    `;

}


function modulePreview() {

    document.querySelector("#app").innerHTML = `

        <section class="page">

            <button
                class="back"
                onclick="openLevel(1)"
            >
                ← BACK TO LEVEL
            </button>

            <div class="page-head">

                <span>
                    MODULE PREVIEW
                </span>

                <h2>
                    Module 01
                </h2>

                <p>
                    Module content placeholder.
                </p>

            </div>

            <div class="content-card">

                <h3>
                    Module Area
                </h3>

                <p>
                    This section is ready for the actual
                    Structural Drafting module.
                </p>

            </div>

        </section>

    `;

}


function activityPreview(number) {

    document.querySelector("#app").innerHTML = `

        <section class="page">

            <button
                class="back"
                onclick="openLevel(${number})"
            >
                ← BACK TO LEVEL
            </button>

            <div class="page-head">

                <span>
                    LEVEL 0${number} • ACTIVITY
                </span>

                <h2>
                    Learning Activity
                </h2>

                <p>
                    This area is ready for the activity
                    corresponding to the selected level.
                </p>

            </div>

            <div class="content-card">

                <h3>
                    Activity Area
                </h3>

                <p>
                    The researchers will place the actual
                    activity instructions and tasks here.
                </p>

            </div>

        </section>

    `;

}


const drawingCanvasState = {
    canvas: null,
    ctx: null,
    currentTool: 'pointer',
    isDrawing: false,
    startX: 0,
    startY: 0,
    drawingHistory: [],
    historyIndex: -1,
    baseImageData: null,
    zoom: 1,
    ortho: false,
    snap: false,
    polar: false,
    isometric: false,
    osnapTracking: false,
    continueLine: false,
    lastPoint: null,
    annotationScale: '1:100',
    materialScale: 1,
    materialRotation: 0,
    hatch: false,
    selectionStart: null,
    selectionEnd: null,
    selectedBounds: null,
    level: 4
};

const drawingPalettes = {
    4: [
        ['door', 'Door', '▯'], ['window', 'Window', '▥'], ['bed', 'Bed', '▤'],
        ['table', 'Table', '□'], ['chair', 'Chair', '⌒'], ['sofa', 'Sofa', '▱'],
        ['toilet', 'Toilet', '◉'], ['sink', 'Sink', '◌'], ['wall', 'Wall', '▤'],
        ['beam', 'Beam', '━'], ['column', 'Column', '▥'], ['footing', 'Footing', '▽'],
        ['slab', 'Slab', '▬'], ['gridline', 'Grid Line', '⊙']
    ],
    5: [
        ['elevwall', 'Wall', '▤'], ['elevdoor', 'Door Elev.', '▯'], ['elevwindow', 'Window Elev.', '▥'],
        ['roof', 'Roof', '⌂'], ['stairs', 'Stairs', '≡'], ['slab', 'Slab', '━'],
        ['column', 'Column', '▥'], ['levelmark', 'Level Mark', '⊥'], ['beam', 'Beam', '━'],
        ['footing', 'Footing', '▽'], ['rebar', 'Rebar', '∥'], ['sectionmark', 'Section', '△']
    ]
};

function getPaletteTools(level) {
    return drawingPalettes[level] || drawingPalettes[4];
}

function selectPaletteTool(tool) {
    setDrawingTool(tool);
}

function paletteMarkup(level) {
    return getPaletteTools(level).map(([tool, label, icon]) =>
        `<button class="palette-btn tool-btn" id="palette-${tool}" onclick="selectPaletteTool('${tool}')" title="${label}">${icon}<small>${label}</small></button>`
    ).join('');
}

function getScaleDenominator() {
    const scale = document.getElementById('annotationScale')?.value || drawingCanvasState.annotationScale;
    const denominator = Number(scale.split(':')[1]);
    return Number.isFinite(denominator) && denominator > 0 ? denominator : 100;
}

function getMillimetersPerPixel() {
    return getScaleDenominator() / 50;
}

function drawGridAndScaleReference() {
    const { ctx, canvas } = drawingCanvasState;
    if (!ctx || !canvas) return;

    const gridStep = 50;
    ctx.fillStyle = '#0b2038';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(120,144,168,0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x <= canvas.width; x += gridStep) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }
    for (let y = 0; y <= canvas.height; y += gridStep) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();

    ctx.strokeStyle = 'rgba(170,181,193,0.2)';
    ctx.beginPath();
    for (let x = 0; x <= canvas.width; x += gridStep * 5) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }
    for (let y = 0; y <= canvas.height; y += gridStep * 5) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();

    ctx.fillStyle = '#eef2f7';
    ctx.font = '11px Arial';
    ctx.fillText('SCALE 1:' + getScaleDenominator() + '  |  GRID 50 px', 16, 22);
}

function drawTestReference() {
    drawGridAndScaleReference();
}

function getCanvasPoint(event) {
    const { canvas, zoom } = drawingCanvasState;
    const rect = canvas.getBoundingClientRect();
    return {
        x: (event.clientX - rect.left) / zoom,
        y: (event.clientY - rect.top) / zoom
    };
}

function constrainDrawingPoint(x, y) {
    if (drawingCanvasState.snap) {
        x = Math.round(x / 10) * 10;
        y = Math.round(y / 10) * 10;
    }
    if (drawingCanvasState.isometric) {
        const dx = x - drawingCanvasState.startX;
        const dy = y - drawingCanvasState.startY;
        const angle = Math.atan2(dy, dx);
        const increment = Math.PI / 6;
        const snappedAngle = Math.round(angle / increment) * increment;
        const distance = Math.hypot(dx, dy);
        return { x: drawingCanvasState.startX + Math.cos(snappedAngle) * distance, y: drawingCanvasState.startY + Math.sin(snappedAngle) * distance };
    }
    if (!drawingCanvasState.ortho && !drawingCanvasState.polar) return { x, y };
    const dx = x - drawingCanvasState.startX;
    const dy = y - drawingCanvasState.startY;
    if (drawingCanvasState.ortho) {
        return Math.abs(dx) >= Math.abs(dy)
            ? { x, y: drawingCanvasState.startY }
            : { x: drawingCanvasState.startX, y };
    }
    const increment = Math.PI / 12;
    const angle = Math.round(Math.atan2(dy, dx) / increment) * increment;
    const distance = Math.hypot(dx, dy);
    return { x: drawingCanvasState.startX + Math.cos(angle) * distance, y: drawingCanvasState.startY + Math.sin(angle) * distance };
}

function setDrawingZoom(zoom) {
    drawingCanvasState.zoom = Math.max(0.5, Math.min(3, zoom));
    const canvas = drawingCanvasState.canvas;
    if (!canvas) return;
    canvas.style.transform = `scale(${drawingCanvasState.zoom})`;
    canvas.style.transformOrigin = `${canvas.width / 2}px ${canvas.height / 2}px`;
    canvas.parentElement.style.minHeight = `${canvas.height * drawingCanvasState.zoom}px`;
    canvas.parentElement.style.minWidth = `${canvas.width * drawingCanvasState.zoom}px`;
    const zoomLabel = document.getElementById('drawingZoom');
    if (zoomLabel) zoomLabel.textContent = Math.round(drawingCanvasState.zoom * 100) + '%';
}

function zoomDrawing(amount) {
    setDrawingZoom(drawingCanvasState.zoom + amount);
}

function zoomDrawingAtCursor(event) {
    event.preventDefault();
    zoomDrawing(event.deltaY < 0 ? 0.1 : -0.1);
}

function toggleOrtho() {
    drawingCanvasState.ortho = !drawingCanvasState.ortho;
    document.getElementById('orthoToggle')?.classList.toggle('active', drawingCanvasState.ortho);
}

function toggleSnap() {
    drawingCanvasState.snap = !drawingCanvasState.snap;
    document.getElementById('snapToggle')?.classList.toggle('active', drawingCanvasState.snap);
}

function toggleDrawingMode(mode) {
    drawingCanvasState[mode] = !drawingCanvasState[mode];
    document.getElementById(mode + 'Toggle')?.classList.toggle('active', drawingCanvasState[mode]);
}

function setAnnotationScale(value) {
    drawingCanvasState.annotationScale = value;
    const label = document.getElementById('annotationScaleLabel');
    if (label) label.textContent = value;
    const status = document.getElementById('drawingAnnotationStatus');
    if (status) status.textContent = 'Annotation ' + value;
}

function setMaterialScale(value) {
    drawingCanvasState.materialScale = Number(value) || 1;
    const label = document.getElementById('materialScaleLabel');
    if (label) label.textContent = Math.round(drawingCanvasState.materialScale * 100) + '%';
}

function setMaterialRotation(value) {
    drawingCanvasState.materialRotation = Number(value) || 0;
    const label = document.getElementById('materialRotationLabel');
    if (label) label.textContent = drawingCanvasState.materialRotation + ' deg';
}

function toggleHatch() {
    drawingCanvasState.hatch = !drawingCanvasState.hatch;
    document.getElementById('hatchToggle')?.classList.toggle('active', drawingCanvasState.hatch);
}

function setDrawingTool(tool) {
    const canvas = drawingCanvasState.canvas;
    if (!canvas) return;

    drawingCanvasState.currentTool = tool;
    const label = tool.charAt(0).toUpperCase() + tool.slice(1);
    const currentToolEl = document.getElementById('currentTool');
    if (currentToolEl) {
        currentToolEl.textContent = tool === 'select' ? 'Crossing Select' : label;
    }

    document.querySelectorAll('.tool-btn').forEach((btn) => {
        btn.classList.remove('active');
    });

    let toolId = 'tool' + label;
    if (tool === 'dimension') {
        toolId = 'toolDim';
    }
    if (tool === 'centerline') {
        toolId = 'toolCenterline';
    }
    if (tool === 'leader') {
        toolId = 'toolLeader';
    }
    if (drawingPalettes[drawingCanvasState.level]?.some(([paletteTool]) => paletteTool === tool)) {
        toolId = 'palette-' + tool;
    }

    const activeButton = document.getElementById(toolId);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    canvas.style.cursor = tool === 'pointer' ? 'default' : 'crosshair';
}

function deleteSelectedArea() {
    const bounds = drawingCanvasState.selectedBounds;
    const { ctx, canvas } = drawingCanvasState;
    if (!bounds || !ctx || !canvas) return;
    ctx.clearRect(bounds.left, bounds.top, bounds.width, bounds.height);
    ctx.save();
    ctx.beginPath();
    ctx.rect(bounds.left, bounds.top, bounds.width, bounds.height);
    ctx.clip();
    drawGridAndScaleReference();
    ctx.restore();
    drawingCanvasState.selectedBounds = null;
    saveToHistory();
    document.getElementById('selectionInfo')?.replaceChildren(document.createTextNode('No area selected'));
}

function saveToHistory() {
    if (!drawingCanvasState.canvas) return;
    const snapshot = drawingCanvasState.canvas.toDataURL();
    if (drawingCanvasState.drawingHistory[drawingCanvasState.historyIndex] === snapshot) return;

    drawingCanvasState.drawingHistory = drawingCanvasState.drawingHistory.slice(0, drawingCanvasState.historyIndex + 1);
    drawingCanvasState.drawingHistory.push(snapshot);
    if (drawingCanvasState.drawingHistory.length > 50) drawingCanvasState.drawingHistory.shift();
    drawingCanvasState.historyIndex = drawingCanvasState.drawingHistory.length - 1;
    saveDrawingDraft();
    updateHistoryButtons();
}

function undoDrawing() {
    if (drawingCanvasState.historyIndex <= 0) return;
    drawingCanvasState.historyIndex--;
    restoreDrawingSnapshot(drawingCanvasState.drawingHistory[drawingCanvasState.historyIndex]);
}

function redoDrawing() {
    if (drawingCanvasState.historyIndex >= drawingCanvasState.drawingHistory.length - 1) return;
    drawingCanvasState.historyIndex++;
    restoreDrawingSnapshot(drawingCanvasState.drawingHistory[drawingCanvasState.historyIndex]);
}

function restoreDrawingSnapshot(snapshot) {
    const image = new Image();
    image.onload = function() {
        const { ctx, canvas } = drawingCanvasState;
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0);
        saveDrawingDraft();
        updateHistoryButtons();
    };
    image.src = snapshot;
}

function updateHistoryButtons() {
    const undoButton = document.getElementById('undoDrawingButton');
    const redoButton = document.getElementById('redoDrawingButton');
    if (undoButton) undoButton.disabled = drawingCanvasState.historyIndex <= 0;
    if (redoButton) redoButton.disabled = drawingCanvasState.historyIndex >= drawingCanvasState.drawingHistory.length - 1;
}

function getDrawingStorageKey(level = drawingCanvasState.level) {
    return `structDraftDrawing${currentYear}-level${level}`;
}

function getDrawingHistory(number) {
    try {
        const history = JSON.parse(localStorage.getItem(`structDraftDrawingHistory${currentYear}-level${number}`) || '[]');
        return Array.isArray(history) ? history : [];
    } catch (error) {
        return [];
    }
}

function updateDrawingHistoryCount(number) {
    const count = document.getElementById('drawingHistoryCount');
    if (count) count.textContent = `HISTORY ${getDrawingHistory(number).length}`;
}

function saveDrawingVersion(number) {
    if (!drawingCanvasState.canvas) return;

    const image = drawingCanvasState.canvas.toDataURL('image/png');
    const history = getDrawingHistory(number);
    if (history[0]?.image === image) return;

    history.unshift({ savedAt: new Date().toISOString(), image });
    try {
        localStorage.setItem(`structDraftDrawingHistory${currentYear}-level${number}`, JSON.stringify(history.slice(0, 12)));
        const status = document.getElementById('drawingSaveStatus');
        if (status) status.textContent = 'Version saved';
        updateDrawingHistoryCount(number);
    } catch (error) {
        const status = document.getElementById('drawingSaveStatus');
        if (status) status.textContent = 'History storage is full';
    }
}

function drawingHistoryView(number) {
    const history = getDrawingHistory(number);
    const entries = history.map((version, index) => `
        <article class="drawing-history-item">
            <img class="drawing-history-preview" src="${version.image}" alt="Drawing version ${index + 1}">
            <div class="drawing-history-meta">
                <strong>Version ${history.length - index}</strong><br>
                ${new Date(version.savedAt).toLocaleString()}
            </div>
            <button class="btn" onclick="restoreDrawingVersion(${number}, ${index})">RESTORE VERSION</button>
        </article>
    `).join('');

    document.querySelector('#app').innerHTML = `
        <section class="page">
            <button class="back" onclick="drawingPreview(${number})">← BACK TO DRAWING</button>
            <div class="page-head">
                <span>LEVEL 0${number} • DRAWING HISTORY</span>
                <h2>Saved Drawing Versions</h2>
                <p>${history.length} saved version${history.length === 1 ? '' : 's'} for ${currentYear}.</p>
            </div>
            ${history.length ? `<div class="drawing-history-grid">${entries}</div>` : '<div class="empty">No saved versions yet. Use SAVE VERSION in the drawing workspace.</div>'}
        </section>
    `;
}

function restoreDrawingVersion(number, index) {
    const version = getDrawingHistory(number)[index];
    if (!version || !confirm('Restore this version? Your current draft will be saved to history first.')) return;

    if (drawingCanvasState.canvas && localStorage.getItem(getDrawingStorageKey(number)) !== drawingCanvasState.canvas.toDataURL('image/png')) {
        saveDrawingVersion(number);
    }
    localStorage.setItem(getDrawingStorageKey(number), version.image);
    drawingPreview(number);
}

function saveDrawingDraft() {
    const { canvas } = drawingCanvasState;
    if (!canvas) return;

    try {
        localStorage.setItem(getDrawingStorageKey(), canvas.toDataURL('image/png'));
        const status = document.getElementById('drawingSaveStatus');
        if (status) status.textContent = 'Draft saved locally';
    } catch (error) {
        const status = document.getElementById('drawingSaveStatus');
        if (status) status.textContent = 'Unable to save draft';
    }
}

function exportDrawing() {
    const { canvas } = drawingCanvasState;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `structdraft-${currentYear}-level-${drawingCanvasState.level}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function clearDrawingCanvas() {
    const { ctx, canvas } = drawingCanvasState;
    if (!ctx || !canvas) return;

    if (confirm('Are you sure you want to clear the canvas?')) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawTestReference();
        drawingCanvasState.drawingHistory = [];
        drawingCanvasState.historyIndex = -1;
        saveToHistory();
    }
}

function drawPreview(sx, sy, ex, ey) {
    const { ctx } = drawingCanvasState;
    if (!ctx) return;

    ctx.strokeStyle = document.getElementById('colorPicker').value;
    ctx.lineWidth = document.getElementById('lineThickness').value;
    ctx.globalAlpha = 0.5;

    switch (drawingCanvasState.currentTool) {
        case 'line':
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
            break;
        case 'rect':
            ctx.strokeRect(sx, sy, ex - sx, ey - sy);
            break;
        case 'circle':
            const r = Math.sqrt(Math.pow(ex - sx, 2) + Math.pow(ey - sy, 2));
            ctx.beginPath();
            ctx.arc(sx, sy, r, 0, 2 * Math.PI);
            ctx.stroke();
            break;
        case 'arc':
            const arcRadius = Math.sqrt(Math.pow(ex - sx, 2) + Math.pow(ey - sy, 2));
            ctx.beginPath();
            ctx.arc(sx, sy, arcRadius, 0, Math.PI);
            ctx.stroke();
            break;
        case 'centerline':
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(sx - 8, sy - 8);
            ctx.lineTo(sx + 8, sy + 8);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(ex - 8, ey - 8);
            ctx.lineTo(ex + 8, ey + 8);
            ctx.stroke();
            break;
        case 'leader':
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, sy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(ex, ey);
            ctx.lineTo(ex - 6, ey - 8);
            ctx.lineTo(ex + 6, ey - 8);
            ctx.closePath();
            ctx.stroke();
            break;
        case 'dimension':
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(sx - 10, sy - 10);
            ctx.lineTo(sx + 10, sy + 10);
            ctx.moveTo(ex - 10, ey - 10);
            ctx.lineTo(ex + 10, ey + 10);
            ctx.stroke();
            ctx.fillStyle = document.getElementById('colorPicker').value;
            ctx.font = '12px Arial';
            ctx.fillText(
                Math.round(Math.hypot(ex - sx, ey - sy) * getMillimetersPerPixel()) + ' mm',
                sx + (ex - sx) / 2,
                sy + (ey - sy) / 2 - 18
            );
            break;
            default:
                drawPaletteSymbol(drawingCanvasState.currentTool, sx, sy, ex, ey);
                break;
    }

    ctx.globalAlpha = 1;
}

function drawPaletteSymbol(tool, sx, sy, ex, ey) {
    const { ctx } = drawingCanvasState;
    const width = Math.max(24, Math.abs(ex - sx)) * drawingCanvasState.materialScale;
    const height = Math.max(24, Math.abs(ey - sy)) * drawingCanvasState.materialScale;
    const left = Math.min(sx, ex);
    const top = Math.min(sy, ey);
    const right = left + width;
    const bottom = top + height;
    ctx.strokeStyle = document.getElementById('colorPicker').value;
    ctx.lineWidth = document.getElementById('lineThickness').value;
    ctx.globalAlpha = 1;
    ctx.save();
    ctx.translate(left + width / 2, top + height / 2);
    ctx.rotate(drawingCanvasState.materialRotation * Math.PI / 180);
    ctx.translate(-(left + width / 2), -(top + height / 2));
    ctx.beginPath();
    if (tool === 'door' || tool === 'elevdoor') {
        ctx.arc(left, bottom, width, Math.PI * 1.5, Math.PI * 2);
        ctx.moveTo(left, bottom);
        ctx.lineTo(left, top);
    } else if (tool === 'window' || tool === 'elevwindow') {
        ctx.rect(left, top, width, height);
        ctx.moveTo(left, top);
        ctx.lineTo(right, bottom);
        ctx.moveTo(right, top);
        ctx.lineTo(left, bottom);
    } else if (tool === 'bed' || tool === 'table' || tool === 'sofa' || tool === 'elevwall') {
        ctx.rect(left, top, width, height);
        ctx.moveTo(left + width / 2, top);
        ctx.lineTo(left + width / 2, bottom);
        if (tool === 'bed') ctx.moveTo(left, top + height * 0.25), ctx.lineTo(right, top + height * 0.25);
    } else if (tool === 'wall') {
        ctx.rect(left, top, width, height);
    } else if (tool === 'beam') {
        ctx.rect(left, top + height * 0.35, width, Math.max(8, height * 0.3));
    } else if (tool === 'chair' || tool === 'toilet' || tool === 'sink') {
        ctx.arc(left + width / 2, top + height / 2, Math.min(width, height) / 2, 0, Math.PI * 2);
    } else if (tool === 'roof') {
        ctx.moveTo(left, bottom);
        ctx.lineTo(left + width / 2, top);
        ctx.lineTo(right, bottom);
        ctx.closePath();
        ctx.stroke();
        if (drawingCanvasState.hatch) {
            ctx.save();
            ctx.clip();
            ctx.beginPath();
            for (let x = left - height; x < right; x += 14) {
                ctx.moveTo(x, bottom);
                ctx.lineTo(x + height, top);
            }
            ctx.stroke();
            ctx.restore();
        }
    } else if (tool === 'stairs') {
        ctx.rect(left, top, width, height);
        for (let x = left + width / 5; x < right; x += width / 5) ctx.moveTo(x, top), ctx.lineTo(x, bottom);
    } else if (tool === 'slab') {
        ctx.rect(left, top + height * 0.3, width, Math.max(8, height * 0.4));
    } else if (tool === 'column') {
        ctx.rect(left + width * 0.3, top, width * 0.4, height);
    } else if (tool === 'footing') {
        ctx.moveTo(left + width * 0.2, top);
        ctx.lineTo(right - width * 0.2, top);
        ctx.lineTo(right, bottom);
        ctx.lineTo(left, bottom);
        ctx.closePath();
    } else if (tool === 'rebar') {
        for (let x = left + width * 0.25; x < right; x += width * 0.25) {
            ctx.moveTo(x, top);
            ctx.lineTo(x, bottom);
        }
    } else if (tool === 'gridline') {
        const centerX = left + width / 2;
        ctx.setLineDash([6, 4]);
        ctx.moveTo(centerX, top + 14);
        ctx.lineTo(centerX, bottom);
        ctx.setLineDash([]);
        ctx.moveTo(centerX + 10, top + 10);
        ctx.arc(centerX, top + 10, 10, 0, Math.PI * 2);
        ctx.fillText('A', centerX - 3, top + 14);
    } else if (tool === 'sectionmark') {
        const centerX = left + width / 2;
        ctx.moveTo(left, top + height / 2);
        ctx.lineTo(right, top + height / 2);
        ctx.moveTo(centerX - 10, top + height / 2);
        ctx.lineTo(centerX, top + height / 2 - 14);
        ctx.lineTo(centerX + 10, top + height / 2);
        ctx.closePath();
    } else if (tool === 'levelmark') {
        ctx.moveTo(left, top + height / 2);
        ctx.lineTo(right, top + height / 2);
        ctx.moveTo(left, top + height / 2);
        ctx.lineTo(left + width * 0.2, top + height * 0.25);
    }
    if (tool !== 'roof') ctx.stroke();
    if (drawingCanvasState.hatch && ['wall', 'elevwall', 'beam', 'column', 'footing', 'slab'].includes(tool)) {
        ctx.save();
        ctx.clip();
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.55;
        for (let offset = -height; offset < width; offset += 12) {
            ctx.moveTo(left + offset, bottom);
            ctx.lineTo(left + offset + height, top);
        }
        ctx.stroke();
        ctx.restore();
    }
    ctx.restore();
}

function initializeDrawingCanvas() {
    const canvas = document.getElementById('drawingCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawingCanvasState.canvas = canvas;
    drawingCanvasState.ctx = ctx;
    drawingCanvasState.currentTool = 'pointer';
    drawingCanvasState.isDrawing = false;
    drawingCanvasState.drawingHistory = [];
    drawingCanvasState.historyIndex = -1;
    const savedDrawing = localStorage.getItem(getDrawingStorageKey());
    document.getElementById('annotationScale').value = drawingCanvasState.annotationScale;
    document.getElementById('annotationScaleLabel').textContent = drawingCanvasState.annotationScale;
    document.getElementById('drawingAnnotationStatus').textContent = 'Annotation ' + drawingCanvasState.annotationScale;
    document.getElementById('materialScale').value = drawingCanvasState.materialScale;
    document.getElementById('materialScaleLabel').textContent = Math.round(drawingCanvasState.materialScale * 100) + '%';
    document.getElementById('materialRotation').value = drawingCanvasState.materialRotation;
    document.getElementById('materialRotationLabel').textContent = drawingCanvasState.materialRotation + ' deg';
    document.getElementById('hatchToggle').classList.toggle('active', drawingCanvasState.hatch);
    document.getElementById('hatchToggle').textContent = drawingCanvasState.hatch ? 'HATCH ON' : 'HATCH';

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTestReference();
    setDrawingTool('pointer');

    if (savedDrawing) {
        const savedImage = new Image();
        savedImage.onload = function() {
            drawTestReference();
            ctx.drawImage(savedImage, 0, 0);
            saveToHistory();
        };
        savedImage.src = savedDrawing;
    } else {
        saveToHistory();
    }

    canvas.addEventListener('mousedown', (e) => {
        if (drawingCanvasState.currentTool === 'pointer') return;

        drawingCanvasState.isDrawing = true;
        const point = getCanvasPoint(e);
        if (drawingCanvasState.currentTool === 'select') {
            drawingCanvasState.selectionStart = point;
            drawingCanvasState.baseImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            return;
        }
        const nearLastPoint = drawingCanvasState.snap && drawingCanvasState.lastPoint && Math.hypot(point.x - drawingCanvasState.lastPoint.x, point.y - drawingCanvasState.lastPoint.y) < 25;
        const connectedLine = drawingCanvasState.currentTool === 'line' && drawingCanvasState.continueLine && drawingCanvasState.lastPoint;
        const startPoint = nearLastPoint || connectedLine ? drawingCanvasState.lastPoint : point;
        drawingCanvasState.startX = startPoint.x;
        drawingCanvasState.startY = startPoint.y;
        drawingCanvasState.baseImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!drawingCanvasState.isDrawing) return;

        const point = getCanvasPoint(e);
        if (drawingCanvasState.currentTool === 'select') {
            ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
            const left = Math.min(drawingCanvasState.selectionStart.x, point.x);
            const top = Math.min(drawingCanvasState.selectionStart.y, point.y);
            const width = Math.abs(point.x - drawingCanvasState.selectionStart.x);
            const height = Math.abs(point.y - drawingCanvasState.selectionStart.y);
            ctx.save();
            ctx.strokeStyle = '#aab5c1';
            ctx.fillStyle = 'rgba(170,181,193,0.12)';
            ctx.setLineDash([6, 4]);
            ctx.fillRect(left, top, width, height);
            ctx.strokeRect(left, top, width, height);
            ctx.restore();
            return;
        }
        const constrainedPoint = constrainDrawingPoint(point.x, point.y);
        const currentX = constrainedPoint.x;
        const currentY = constrainedPoint.y;

        if (drawingCanvasState.baseImageData) {
            ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
            drawPreview(drawingCanvasState.startX, drawingCanvasState.startY, currentX, currentY);
        }
    });

    canvas.addEventListener('mouseup', (e) => {
        if (!drawingCanvasState.isDrawing) return;

        const point = getCanvasPoint(e);
        const constrainedPoint = constrainDrawingPoint(point.x, point.y);
        const endX = constrainedPoint.x;
        const endY = constrainedPoint.y;

        drawingCanvasState.isDrawing = false;

        if (drawingCanvasState.currentTool === 'select') {
            if (drawingCanvasState.baseImageData) ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
            const bounds = {
                left: Math.min(drawingCanvasState.selectionStart.x, endX),
                top: Math.min(drawingCanvasState.selectionStart.y, endY),
                width: Math.abs(endX - drawingCanvasState.selectionStart.x),
                height: Math.abs(endY - drawingCanvasState.selectionStart.y)
            };
            drawingCanvasState.selectedBounds = bounds;
            ctx.save();
            ctx.strokeStyle = '#aab5c1';
            ctx.fillStyle = 'rgba(170,181,193,0.12)';
            ctx.setLineDash([6, 4]);
            ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            ctx.strokeRect(bounds.left, bounds.top, bounds.width, bounds.height);
            ctx.restore();
            document.getElementById('selectionInfo')?.replaceChildren(document.createTextNode('Area selected. Click DELETE SELECTED.'));
            return;
        }

        if (drawingCanvasState.baseImageData) {
            ctx.putImageData(drawingCanvasState.baseImageData, 0, 0);
        }

        ctx.strokeStyle = document.getElementById('colorPicker').value;
        ctx.lineWidth = document.getElementById('lineThickness').value;
        ctx.fillStyle = document.getElementById('colorPicker').value;

        switch (drawingCanvasState.currentTool) {
            case 'line':
                ctx.beginPath();
                ctx.moveTo(drawingCanvasState.startX, drawingCanvasState.startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
                break;
            case 'rect':
                ctx.strokeRect(drawingCanvasState.startX, drawingCanvasState.startY, endX - drawingCanvasState.startX, endY - drawingCanvasState.startY);
                break;
            case 'circle':
                const radius = Math.sqrt(Math.pow(endX - drawingCanvasState.startX, 2) + Math.pow(endY - drawingCanvasState.startY, 2));
                ctx.beginPath();
                ctx.arc(drawingCanvasState.startX, drawingCanvasState.startY, radius, 0, 2 * Math.PI);
                ctx.stroke();
                break;
            case 'arc':
                const arcRadius = Math.sqrt(Math.pow(endX - drawingCanvasState.startX, 2) + Math.pow(endY - drawingCanvasState.startY, 2));
                ctx.beginPath();
                ctx.arc(drawingCanvasState.startX, drawingCanvasState.startY, arcRadius, 0, Math.PI);
                ctx.stroke();
                break;
            case 'centerline':
                ctx.beginPath();
                ctx.moveTo(drawingCanvasState.startX, drawingCanvasState.startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(drawingCanvasState.startX - 8, drawingCanvasState.startY - 8);
                ctx.lineTo(drawingCanvasState.startX + 8, drawingCanvasState.startY + 8);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(endX - 8, endY - 8);
                ctx.lineTo(endX + 8, endY + 8);
                ctx.stroke();
                break;
            case 'dimension':
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(drawingCanvasState.startX, drawingCanvasState.startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(drawingCanvasState.startX - 10, drawingCanvasState.startY - 10);
                ctx.lineTo(drawingCanvasState.startX + 10, drawingCanvasState.startY + 10);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(endX - 10, endY - 10);
                ctx.lineTo(endX + 10, endY + 10);
                ctx.stroke();

                const extensionOffset = 18;
                const dimStartX = drawingCanvasState.startX + (endX - drawingCanvasState.startX) / 2;
                const dimStartY = drawingCanvasState.startY + (endY - drawingCanvasState.startY) / 2;
                const distance = Math.round(Math.hypot(endX - drawingCanvasState.startX, endY - drawingCanvasState.startY) * getMillimetersPerPixel());
                ctx.fillStyle = '#eef2f7';
                ctx.font = '12px Arial';
                ctx.fillText(distance + ' mm', dimStartX, dimStartY - extensionOffset);
                break;
            case 'leader':
                ctx.beginPath();
                ctx.moveTo(drawingCanvasState.startX, drawingCanvasState.startY);
                ctx.lineTo(endX, drawingCanvasState.startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(endX, endY);
                ctx.lineTo(endX - 6, endY - 8);
                ctx.lineTo(endX + 6, endY - 8);
                ctx.closePath();
                ctx.stroke();
                break;
            case 'text':
                const text = prompt('Enter text:');
                if (text) {
                    ctx.fillStyle = document.getElementById('colorPicker').value;
                    ctx.font = 'bold 14px Arial';
                    ctx.fillText(text, drawingCanvasState.startX, endY);
                }
                break;
            default:
                drawPaletteSymbol(drawingCanvasState.currentTool, drawingCanvasState.startX, drawingCanvasState.startY, endX, endY);
                break;
        }

        if (drawingCanvasState.currentTool === 'line' && drawingCanvasState.continueLine) {
            drawingCanvasState.lastPoint = { x: endX, y: endY };
        } else if (drawingCanvasState.currentTool !== 'line') {
            drawingCanvasState.lastPoint = null;
        }

        saveToHistory();
    });

    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        zoomDrawingAtCursor(e);
    }, { passive: false });
}

function submitDrawing(number) {
    if (!drawingCanvasState.canvas) return;

    drawingCanvasState.level = number;
    saveDrawingDraft();
    saveDrawingVersion(number);
    alert('Drawing saved successfully.');
}

function drawingPreview(number) {

    drawingCanvasState.level = number;

    document.querySelector("#app").innerHTML = `

        <section class="page">

            <button
                class="back"
                onclick="openLevel(${number})"
            >
                ← BACK TO LEVEL
            </button>

            <div class="page-head">

                <span>
                    LEVEL 0${number} • DRAWING ACTIVITY
                </span>

                <h2>
                    Structural Drawing Workspace
                </h2>

                <p>
                    Use the tools below to create your structural drawing. Draw lines, rectangles, circles, and add dimensions.
                </p>

            </div>

            <div class="drawing-toolbar">
                <button class="tool-btn" id="toolPointer" onclick="setDrawingTool('pointer')" title="Pointer">↖</button>
                <button class="tool-btn" id="toolSelect" onclick="setDrawingTool('select')" title="Crossing selection">CROSSING SELECT</button>
                <button class="tool-btn" id="toolLine" onclick="setDrawingTool('line')" title="Line">—</button>
                <button class="tool-btn" id="toolRect" onclick="setDrawingTool('rect')" title="Rectangle">▭</button>
                <button class="tool-btn" id="toolCircle" onclick="setDrawingTool('circle')" title="Circle">◯</button>
                <button class="tool-btn" id="toolArc" onclick="setDrawingTool('arc')" title="Arc">⌢</button>
                <button class="tool-btn" id="toolCenterline" onclick="setDrawingTool('centerline')" title="Center line">⊕</button>
                <span class="separator">|</span>
                <button class="tool-btn" id="toolDim" onclick="setDrawingTool('dimension')" title="Dimension">├</button>
                <button class="tool-btn" id="toolLeader" onclick="setDrawingTool('leader')" title="Leader">↗</button>
                <button class="tool-btn" id="toolText" onclick="setDrawingTool('text')" title="Text">A</button>
                <span class="separator">|</span>
                <div class="tool-group"><span class="group-title">${number === 4 ? 'FLOOR PLAN' : 'ELEVATION'} MATERIALS</span><div class="tool-palette">${paletteMarkup(number)}</div></div>
                <div class="tool-group"><span class="group-title">TRACKING / SNAP</span><div class="tool-palette">
                    <button class="tool-btn" id="orthoToggle" onclick="toggleOrtho()" title="Ortho mode">ORTHO</button>
                    <button class="tool-btn" id="polarToggle" onclick="toggleDrawingMode('polar')" title="Polar tracking">POLAR</button>
                    <button class="tool-btn" id="isometricToggle" onclick="toggleDrawingMode('isometric')" title="Isometric object tracking">ISOMETRIC</button>
                    <button class="tool-btn" id="snapToggle" onclick="toggleSnap()" title="Object snap">OSNAP</button>
                    <button class="tool-btn" id="osnapTrackingToggle" onclick="toggleDrawingMode('osnapTracking')" title="Object snap tracking">OTRACK</button>
                    <button class="tool-btn" id="continueLineToggle" onclick="toggleDrawingMode('continueLine')" title="Connect next line">CONNECT</button>
                </div></div>
                <div class="tool-group"><span class="group-title">ANNOTATION SCALE</span><select id="annotationScale" onchange="setAnnotationScale(this.value)" title="Annotation scale"><option>1:50</option><option selected>1:100</option><option>1:200</option></select><span id="annotationScaleLabel">1:100</span></div>
                <div class="tool-group"><span class="group-title">MATERIAL PROPERTIES</span><div class="material-controls"><label>SIZE <input id="materialScale" type="range" min="0.5" max="3" step="0.1" value="1" oninput="setMaterialScale(this.value)"><span id="materialScaleLabel">100%</span></label><label>ROT <input id="materialRotation" type="number" min="-180" max="180" step="15" value="0" onchange="setMaterialRotation(this.value)"><span id="materialRotationLabel">0 deg</span></label><button class="tool-btn" id="hatchToggle" onclick="toggleHatch()" title="Hatch material">HATCH</button></div></div>
                <div class="tool-group zoom-group"><span class="group-title">VIEW</span><div class="tool-palette"><button class="tool-btn" onclick="zoomDrawing(0.25)" title="Zoom in">＋</button><button class="tool-btn" onclick="zoomDrawing(-0.25)" title="Zoom out">－</button><button class="tool-btn" onclick="setDrawingZoom(1)" title="Fit drawing">FIT</button><span id="drawingZoom">100%</span></div></div>
                <input type="color" id="colorPicker" value="#aab5c1" title="Color">
                <input type="range" id="lineThickness" min="1" max="5" value="2" style="width: 80px;" title="Line Thickness">
                <span class="separator">|</span>
                <button class="tool-btn secondary" onclick="clearDrawingCanvas()" title="Clear">🗑</button>
                <button class="tool-btn" id="undoDrawingButton" onclick="undoDrawing()" title="Undo" disabled>↶ UNDO</button>
                <button class="tool-btn" id="redoDrawingButton" onclick="redoDrawing()" title="Redo" disabled>↷ REDO</button>
                <button class="tool-btn secondary" onclick="deleteSelectedArea()" title="Delete selected area">DELETE SELECTED</button>
                <button class="tool-btn" onclick="exportDrawing()" title="Export as PNG">EXPORT PNG</button>
                <button class="tool-btn" onclick="saveDrawingVersion(${number})" title="Save a version to history">SAVE VERSION</button>
                <button class="tool-btn" id="drawingHistoryCount" onclick="drawingHistoryView(${number})" title="View saved drawing versions">HISTORY ${getDrawingHistory(number).length}</button>
                <span id="drawingSaveStatus" role="status">Draft saved locally</span>
                <button class="tool-btn" onclick="submitDrawing(${number})" title="Submit">✓ SUBMIT</button>
            </div>

            <div class="drawing-container">
                <canvas id="drawingCanvas" width="1000" height="600"></canvas>
            </div>
            <div class="model-tabs">
                <button class="model-tab active">Model</button><button class="model-tab">Layout 1</button><button class="model-tab">Layout 2</button>
                <span class="model-status">Model space • ${number === 4 ? 'Floor plan' : 'Elevation'}</span>
            </div>

            <div class="draft-status-strip">
                <span>STRUCTDRAFT DRAFT ASSIST</span>
                <span id="selectionInfo">No area selected</span>
                <span>Material 100%</span>
                <span id="drawingAnnotationStatus">Annotation 1:100</span>
            </div>

            <div class="drawing-info">
                <p>
                    <strong>Current Tool:</strong> <span id="currentTool">Pointer</span> | 
                    <strong>Instructions:</strong> Select a tool and click/drag on the canvas to draw. Use SELECT to isolate an area, then delete only that selection.
                </p>
            </div>

        </section>

        <style>
            .drawing-toolbar {
                display: flex;
                gap: 5px;
                padding: 10px;
                background: rgba(255,255,255,0.05);
                border-radius: 4px;
                margin-bottom: 15px;
                flex-wrap: wrap;
                align-items: center;
            }
            
            .tool-btn {
                padding: 8px 12px;
                background: rgba(170,181,193,0.2);
                border: 1px solid #aab5c1;
                color: #eef2f7;
                cursor: pointer;
                border-radius: 3px;
                font-weight: bold;
                transition: all 0.2s;
            }
            
            .tool-btn:hover {
                background: rgba(170,181,193,0.4);
            }

            .tool-btn:disabled {
                opacity: 0.4;
                cursor: not-allowed;
            }
            
            .tool-btn.active {
                background: #aab5c1;
            }
            
            .tool-btn.secondary {
                background: rgba(255,100,100,0.2);
                border-color: #ff6464;
            }
            
            .tool-btn.secondary:hover {
                background: rgba(255,100,100,0.4);
            }

            .tool-group { display: flex; flex-direction: column; gap: 4px; padding: 4px 7px; border-left: 1px solid rgba(255,255,255,0.12); }
            .group-title { color: #8d99ad; font-size: 8px; letter-spacing: 1.2px; }
            .tool-group select { min-height: 30px; background: #102a46; border: 1px solid #aab5c1; color: #eef2f7; }
            #annotationScaleLabel { color: #dfe7ff; font-size: 10px; }
            .material-controls { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
            .material-controls label { color: #dfe7ff; font-size: 9px; }
            .material-controls input[type="number"] { width: 48px; background: #102a46; border: 1px solid #aab5c1; color: #eef2f7; }
            .material-controls span { color: #dfe7ff; font-size: 9px; }
            .model-tabs { display: flex; align-items: center; gap: 4px; padding: 6px 8px; background: #111824; border: 1px solid rgba(255,255,255,0.12); border-top: 0; }
            .model-tab { border: 1px solid rgba(255,255,255,0.16); background: #202a3a; color: #dfe7ff; padding: 6px 12px; cursor: pointer; }
            .model-tab.active { background: #aab5c1; color: #071a30; }
            .model-status { margin-left: auto; color: #8d99ad; font-size: 10px; }

            .palette-label {
                color: #dfe7ff;
                font-size: 10px;
                letter-spacing: 1px;
                white-space: nowrap;
            }

            .tool-palette {
                display: flex;
                gap: 4px;
                flex-wrap: wrap;
            }

            .palette-btn {
                min-width: 48px;
                min-height: 42px;
                padding: 4px 6px;
                display: inline-flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2px;
            }

            .palette-btn small {
                font-size: 9px;
                font-weight: normal;
                white-space: nowrap;
            }
            
            .separator {
                color: #687384;
                margin: 0 3px;
            }
            
            #colorPicker {
                width: 40px;
                height: 32px;
                cursor: pointer;
                border: 1px solid #aab5c1;
                border-radius: 3px;
            }
            
            .drawing-container {
                border: 2px solid #aab5c1;
                background: #000;
                border-radius: 4px;
                overflow: auto;
                position: relative;
                margin-bottom: 15px;
            }
            
            #drawingCanvas {
                display: block;
                cursor: crosshair;
                background: #0b2038;
            }
            
            .drawing-info {
                padding: 10px;
                background: rgba(170,181,193,0.1);
                border-left: 3px solid #aab5c1;
                border-radius: 3px;
                font-size: 12px;
            }
        </style>
    `;

    initializeDrawingCanvas();

}


function assessment(number) {

    selectedAnswers = {};
    const questions = quizzes[number];
    
    let questionsHTML = "";
    
    questions.forEach((question, index) => {
        let optionsHTML = "";
        question.options.forEach((option, optIndex) => {
            optionsHTML += `
                <button
                    class="option"
                    onclick="selectAnswer(this, ${index}, ${optIndex})"
                >
                    ${String.fromCharCode(65 + optIndex)}. ${option}
                </button>
            `;
        });
        
        questionsHTML += `
            <div class="question">
                <p>
                    <strong>Question ${index + 1}:</strong> ${question.q}
                </p>
                <div class="options">
                    ${optionsHTML}
                </div>
            </div>
        `;
    });

    document.querySelector("#app").innerHTML = `

        <section class="page">

            <button
                class="back"
                onclick="openLevel(${number})"
            >
                ← BACK TO LEVEL
            </button>


            <div class="page-head">

                <span>
                    LEVEL 0${number} • ASSESSMENT (${questions.length} QUESTIONS)
                </span>

                <h2>
                    Level Assessment
                </h2>

                <p>
                    Answer all ${questions.length} questions to complete this level.
                    ${progress[number].takes.length > 0 ? `<br><strong>Attempt: ${progress[number].takes.length + 1}</strong>` : ''}
                </p>

            </div>


            <div class="quiz">

                ${questionsHTML}

                <button
                    class="btn"
                    onclick="submitAssessment(${number})"
                    style="margin-top: 20px;"
                >
                    SUBMIT ASSESSMENT
                </button>

            </div>

        </section>

    `;

}


function selectAnswer(button, questionIndex, optionIndex) {

    const buttons =
        button.parentElement.querySelectorAll(".option");

    buttons.forEach(item => {

        item.classList.remove("selected");

    });

    button.classList.add("selected");

    selectedAnswers[questionIndex] = optionIndex;

}


function submitAssessment(number) {

    const questions = quizzes[number];
    const totalQuestions = questions.length;
    
    if (Object.keys(selectedAnswers).length < totalQuestions) {

        alert(`Please answer all ${totalQuestions} questions.`);

        return;

    }

    let correctAnswers = 0;
    for (let i = 0; i < totalQuestions; i++) {
        if (selectedAnswers[i] === questions[i].correct) {
            correctAnswers++;
        }
    }
    
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const passing = score >= 70;
    
    const takeRecord = {
        date: new Date().toLocaleString(),
        score: score,
        passed: passing
    };
    
    progress[number].takes.push(takeRecord);
    
    if (progress[number].bestScore === null || score > progress[number].bestScore) {
        progress[number].bestScore = score;
    }
    
    if (passing) {
        progress[number].completed = true;
        if (number < 5) {
            progress[number + 1].unlocked = true;
        }
    }

    saveProgress();

    document.querySelector("#app").innerHTML = `

        <section class="page">

            <div class="page-head">

                <span>
                    ASSESSMENT ${passing ? 'PASSED' : 'NEEDS REVIEW'}
                </span>

                <h2>
                    ${passing ? 'Congratulations!' : 'Keep Practicing'}
                </h2>

                <p>
                    ${passing ? 'You have successfully completed this level!' : 'Your score does not meet the passing requirement. Try again to improve your score.'}
                </p>

            </div>


            <div class="result">

                <h3>
                    Your Score: <strong>${score}%</strong>
                </h3>

                <p>
                    Correct Answers: ${correctAnswers} / ${totalQuestions}
                </p>

                <div style="margin-top: 20px; padding: 15px; background: rgba(170,181,193,0.1); border-radius: 4px;">
                    <strong>Attempt #${progress[number].takes.length}</strong><br>
                    Best Score: ${progress[number].bestScore}%<br>
                    Total Attempts: ${progress[number].takes.length}
                </div>

                ${passing ? `<p style="margin-top: 20px; color: #aab5c1;">
                    ${number < 5 ? `✓ Level ${number + 1} is now unlocked.` : '✓ You have completed all five levels!'}
                </p>` : ''}

            </div>


            <div style="margin-top: 20px;">
                ${passing ? 
                    `<button class="btn" onclick="dashboard()" style="margin-right: 10px;">
                        RETURN TO DASHBOARD →
                    </button>` 
                    : 
                    `<button class="btn secondary" onclick="assessment(${number})" style="margin-right: 10px;">
                        RETAKE ASSESSMENT
                    </button>
                    <button class="btn" onclick="openLevel(${number})">
                        RETURN TO LEVEL
                    </button>`
                }
            </div>

        </section>

    `;

}


function toggleYearDropdown() {
    const dropdown = document.getElementById("yearDropdown");
    dropdown.classList.toggle("active");
}

function switchYear(year) {
    saveProgress();
    
    currentYear = year;
    
    document.getElementById("yearDisplay").textContent = year;
    document.getElementById("footerYear").textContent = year;
    
    document.getElementById("yearDropdown").classList.remove("active");
    
    document.querySelectorAll(".year-option").forEach(btn => {
        if (parseInt(btn.textContent) === year) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    progress = JSON.parse(
        localStorage.getItem(`structDraftProgress${currentYear}`)
    ) || {
        1: { unlocked: true, completed: false, takes: [], bestScore: null },
        2: { unlocked: false, completed: false, takes: [], bestScore: null },
        3: { unlocked: false, completed: false, takes: [], bestScore: null },
        4: { unlocked: false, completed: false, takes: [], bestScore: null },
        5: { unlocked: false, completed: false, takes: [], bestScore: null }
    };
    
    dashboard();
}

document.addEventListener("DOMContentLoaded", function() {
    const yearDisplay = document.getElementById("yearDisplay");
    
    yearDisplay.parentElement.addEventListener("click", function(e) {
        if (!e.target.classList.contains("year-option")) {
            toggleYearDropdown();
        }
    });
    
    document.querySelectorAll(".year-option").forEach(btn => {
        if (parseInt(btn.textContent) === currentYear) {
            btn.classList.add("active");
        }
    });
    
    document.addEventListener("click", function(e) {
        const yearSelector = document.querySelector(".year-selector");
        if (!yearSelector.contains(e.target)) {
            document.getElementById("yearDropdown").classList.remove("active");
        }
    });
});


dashboard();    