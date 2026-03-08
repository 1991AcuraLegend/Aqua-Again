import {
  AquaBadge,
  AquaButton,
  AquaCard,
  AquaCheckbox,
  AquaCombobox,
  AquaDrawer,
  AquaIndeterminateProgress,
  AquaPillTabs,
  AquaProgress,
  AquaProgressDialog,
  AquaRadio,
  AquaSearchField,
  AquaSegmentedControl,
  AquaSheet,
  AquaSlider,
  AquaSourceList,
  AquaSpinner,
  AquaScrollbar,
  AquaTabs,
  AquaWindow,
} from "./aqua-ui";

export function AquaDashboardExample() {
  return (
    <div className="aqua-shell">
      <AquaWindow
        title="Aqua Control Center"
        toolbar={
          <>
            <AquaTabs items={["Overview", "Library", "Downloads"]} active="Overview" />
            <div style={{ marginLeft: "auto", width: "min(260px, 100%)" }}>
              <AquaSearchField defaultValue="Search Aqua controls" />
            </div>
          </>
        }
      >
        <AquaSheet
          title="Save Changes to Aqua Library?"
          actions={
            <>
              <AquaButton variant="secondary">Cancel</AquaButton>
              <AquaButton>Save</AquaButton>
            </>
          }
        >
          <p className="aqua-caption">Attached sheets were a signature OS X interaction. This one drops from the titlebar with the same silver pinstripe treatment as the window chrome.</p>
        </AquaSheet>

        <div className="aqua-dashboard">
          <aside className="aqua-stack">
            <AquaCard className="aqua-stack">
              <div className="aqua-hero-card">
                <div className="aqua-orb" aria-hidden="true" />
                <div>
                  <p className="aqua-section-title">Theme Kernel</p>
                  <h1 className="aqua-display" style={{ fontSize: 42, marginBottom: 8 }}>Aqua OS</h1>
                  <p className="aqua-caption">Classic web controls rebuilt as CSS, SVG, and React primitives.</p>
                </div>
              </div>
              <div className="aqua-inline">
                <AquaButton>Download Kit</AquaButton>
                <AquaButton variant="secondary">Inspect Code</AquaButton>
              </div>
            </AquaCard>

            <AquaCard>
              <p className="aqua-section-title">Source List</p>
              <div className="aqua-stack">
                <AquaSourceList
                  active="All Controls"
                  items={[
                    { label: "All Controls", count: 24 },
                    { label: "Windows", count: 4 },
                    { label: "Buttons", count: 12 },
                    { label: "Inputs", count: 8 },
                    { label: "Loaders", count: 3 },
                  ]}
                />
              </div>
            </AquaCard>

            <AquaCard>
              <p className="aqua-section-title">Quick Controls</p>
              <div className="aqua-stack">
                <AquaSegmentedControl items={["Left", "Center", "Right"]} active="Center" />
                <AquaCheckbox checked>Enable gel highlights</AquaCheckbox>
                <AquaCheckbox>Use striped chrome</AquaCheckbox>
                <AquaRadio selected>Blue gel selection</AquaRadio>
                <AquaRadio>Silver bevel selection</AquaRadio>
                <AquaCombobox defaultValue="Panther pinstripe">
                  <option>Panther pinstripe</option>
                  <option>Jaguar gloss</option>
                  <option>Brushed metal</option>
                </AquaCombobox>
                <AquaSlider value={62} />
                <AquaProgress value={74} />
              </div>
            </AquaCard>
          </aside>

          <section className="aqua-stack">
            <div className="aqua-stat-grid">
              {[
                ["Components", "24", "Reusable pieces in the current pack."],
                ["Formats", "4", "CSS, HTML, SVG, and PNG exports."],
                ["Theme Score", "98", "Aggressive gloss, stripes, and blue depth."],
                ["Status", "OK", "Rendering previews."],
              ].map(([label, value, detail]) => (
                <div className="aqua-stat" key={label}>
                  <p className="aqua-stat-label">{label}</p>
                  <p className="aqua-stat-value">{value}</p>
                  <p className="aqua-caption" style={{ marginBottom: 0 }}>{detail}</p>
                </div>
              ))}
            </div>

            <div className="aqua-panel-grid">
              <AquaCard className="aqua-stack">
                <div>
                  <p className="aqua-section-title">Control Gallery</p>
                  <p className="aqua-caption">Use the same CSS classes directly or wrap them with framework components.</p>
                </div>
                <div className="aqua-inline">
                  <AquaButton>Primary</AquaButton>
                  <AquaButton variant="secondary">Secondary</AquaButton>
                  <AquaSpinner />
                  <AquaBadge>Recommended</AquaBadge>
                </div>
                <AquaTabs items={["Aqua Tab", "Another", "Utilities"]} active="Aqua Tab" />
                <AquaPillTabs items={["General", "Sharing", "Advanced"]} active="General" />
                <div className="aqua-detail-grid">
                  <div className="aqua-stack">
                    <AquaIndeterminateProgress />
                    <div className="aqua-note aqua-brushed">
                      <strong>Indeterminate progress</strong>
                      <p className="aqua-caption">Barber-pole fill closer to classic Aqua installer and copy dialogs.</p>
                    </div>
                  </div>
                  <AquaScrollbar />
                </div>
                <div className="aqua-note">
                  <strong>Window shell package</strong>
                  <p className="aqua-caption">Includes chrome, pinstripe tile, traffic lights, toolbar, cards, and shell surfaces.</p>
                  <AquaProgress value={74} />
                </div>
              </AquaCard>

              <AquaCard className="aqua-stack">
                <p className="aqua-section-title">Authenticity Notes</p>
                <div className="aqua-list">
                  <div className="aqua-row"><strong>Smaller title text and denser titlebar</strong><AquaBadge>matched</AquaBadge></div>
                  <div className="aqua-row"><strong>Pinstriped silver chrome with strong gloss cuts</strong><AquaBadge>matched</AquaBadge></div>
                  <div className="aqua-row"><strong>Source list, combo, radio, barber-pole progress, scrollbar</strong><AquaBadge>added</AquaBadge></div>
                  <div className="aqua-row"><strong>Attached sheet, brushed drawer, pill tabs, progress dialog</strong><AquaBadge>added</AquaBadge></div>
                </div>
              </AquaCard>
            </div>

            <AquaCard className="aqua-stack">
              <p className="aqua-section-title">Window Furniture</p>
              <div className="aqua-window-split">
                <AquaDrawer>
                  <p className="aqua-section-title">Drawer</p>
                  <div className="aqua-list">
                    <div className="aqua-row"><strong>Quick Find</strong><AquaBadge>/</AquaBadge></div>
                    <div className="aqua-row"><strong>Bookmark Shelf</strong><AquaBadge>12</AquaBadge></div>
                    <div className="aqua-row"><strong>Inspector</strong><AquaBadge>live</AquaBadge></div>
                  </div>
                </AquaDrawer>
                <div className="aqua-stack">
                  <AquaProgressDialog title="Copying Aqua Assets…" status="41%" />
                  <div className="aqua-window-preview">
                    <div className="aqua-toolbar aqua-brushed">
                      <AquaPillTabs items={["Fonts", "Colors", "Metrics"]} active="Fonts" />
                    </div>
                    <div className="aqua-content">
                      <p className="aqua-caption">Pill tabs and drawers help recreate the utility-window feel found in many Panther-era apps.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AquaCard>
          </section>
        </div>
      </AquaWindow>
    </div>
  );
}