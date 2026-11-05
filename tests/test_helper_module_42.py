import pytest
from utils.helper_module_42 import process_data_42

def test_process_data_42():
    assert process_data_42({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_42(None) == {}
