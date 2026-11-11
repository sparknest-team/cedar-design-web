## ADDED Requirements

### Requirement: Single shell owner
FieldDecorator SHALL own InputTag shell background, borders and focus shadows without Form overrides.

#### Scenario: Validated form field
- **WHEN** InputTag appears in a status-bearing Form item
- **THEN** Form does not repaint its FieldDecorator shell

### Requirement: Reachable content state rules
InputTag content SHALL consume its documented tokens using actual FieldDecorator state classes.

#### Scenario: Size and focus
- **WHEN** an xs, sm, md or lg InputTag gains focus
- **THEN** its content matches the size and focus token rules

#### Scenario: Disabled with focus
- **WHEN** a default chip's host is disabled and retains focus state
- **THEN** disabled content colors win over focus colors

#### Scenario: Ineffective legacy customization
- **WHEN** the public InputTag token list is read
- **THEN** only the 24 consumed content declarations remain and the 33 former shell declarations have no aliases
